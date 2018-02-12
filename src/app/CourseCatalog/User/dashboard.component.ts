import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';
import { _Department, _User, gender } from '../Model/dataModel';

declare var ClientScripts: any;

@Component({
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.css']
  })

export class DashboardComponent implements OnInit {

    monthArray: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    noOfDayArray: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    yearArray: Array<string> =  [];
    dayArray: Array<string> = [];
    RegistrationTrendCourse: any;
    RegistrationTrendData: any;
    RegTrendGrphData: Array<any>;
    RegTrendGraphLabel: Array<string> = [];
    RegTrendGraphOption:any;
    RegTrendGraphType:string;
    ChartData:Array<number>;
    RTDataOf: string;
    RTPeriod: string;
    currentMonth:number;
    currentYear:number;
    RTChartReady: boolean;

    TCChartReady:boolean;
    TopCoursesData: any;
    TCChartData:any;
    TCChartDataTemp: any;
    TCChartLabels: Array<string>;
    TCChartLabelsTemp: Array<string>;
    TCChartType: string;
    TCDepartment: string;
    TCChartLegend:boolean;
    TCChartOption:any;
    
    departments: _Department[];
    isUserAdmin: boolean;
    registeredCourses: any;
    registeredCourseCount: number;
    CoursesCompleted: number;
    CreditEarned: number;
    CreditTotal: number;
    userDetail:_User;

    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {

        this.isUserAdmin = this._AuthenticationService.getLoggedUserDetail('admin');

        this.getLoggedUserCourses();
        this.loadUserDetail();
    
        this.initializeTCChart();
        this.initializeChartData();

        
        if(this.isUserAdmin) {

            
            this.getTopCourses();

        }

    }

    loadUserDetail() {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        if(this.userDetail.imageURL == "")
            if(this.userDetail.gender == gender.male)
                this.userDetail.imageURL = '../../assets/images/default_avatar_male.jpg';
            else
                this.userDetail.imageURL = '../../assets/images/default_avatar_female.jpg';
        // console.log(this.userDetail);
    }

    loadDepartments() {
        this._CourseCatalogService.getDepartments()
          .subscribe(
            data => {
                this.departments = data;
            },
            error => {
                this.departments = [];
            //   console.log(error._body);
            });
    }

    onChangeRTPeriod(Period:string) {
        // console.log(Period);
        this.RTPeriod = Period;
        this.RegTrendGrphData = [];

        this.RTChartReady = false;
        this.ArrangeChartDataOf(this.RegistrationTrendData, "User");
        this.ArrangeChartDataOf(this.RegistrationTrendCourse, "Course");

    }

    initializeTCChart() {
        this.TCDepartment = "Overall";
        this.TCChartType = "pie";
        this.TCChartLegend = true;
        this.TCChartData = [];
        this.TCChartLabels = [];
        this.TCChartOption = {
            responsive: true,

            legend: {
                display:true,
                position: 'left'
            }};
        this.loadDepartments();
        this.getTopCourses();
    }

    getTopCourses() {

        this._CourseCatalogService.getTopCourses()
        .subscribe(
            data => {

                this.TopCoursesData = data;
                this.refreshTCData();
                // console.log(this.TopCoursesData);

            },
            error => {
                console.log(error._body);
            });

    }

    refreshTCData() {

        this.TCChartData = [];
        this.TCChartLabels = [];
        this.TCChartLabelsTemp = [];
        this.TCChartDataTemp = [];
        var TCChartdata: number[] = [];
        var TCChartlabel: string[] = [];

        this.TCChartLabels.pop();

        if(this.TCDepartment == "Overall") {
            for(let i=0; i<this.TopCoursesData.length; i++) {
                this.TCChartDataTemp.push(this.TopCoursesData[i]['count']);
                this.TCChartLabelsTemp.push(this.TopCoursesData[i]['title']);
            }
        } else {
            for(let i=0; i<this.TopCoursesData.length; i++) {
                if(this.TopCoursesData[i]['department'] == this.TCDepartment) {
                    this.TCChartDataTemp.push(this.TopCoursesData[i]['count']);
                    this.TCChartLabelsTemp.push(this.TopCoursesData[i]['title']);
                }
            }
        }

        this.TCChartData = this.TCChartDataTemp;
        this.TCChartLabels = this.TCChartLabelsTemp;

        if(!this.TCChartReady)
            this.TCChartReady = true;
    }

    onChangeTCChartType(ChartType: string) {
        this.TCChartType = ChartType;
    }

    onChangeTCDepartment(Department: string) {
        // console.log(Department);
        this.TCDepartment = Department;

        while(this.TCChartLabels.length > 0)
            this.TCChartLabels.pop()

        this.TCChartLabels = [];
        
        this.refreshTCData();
    }

    initializeChartData() {

        this.getChartArray();
        this.RTChartReady = false;
        this.RTPeriod = 'Day';
        this.RTDataOf = 'User';
        this.RegTrendGraphType = 'line';
        this.RegTrendGraphOption = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display:true,
                position: 'bottom'
            }
        };
        this.getChartData();

    }

    getChartData() {

        this.RegTrendGrphData = []

        this._CourseCatalogService.getRegistrationTrend("user")
            .subscribe(
                data => {
                    this.RegistrationTrendData = data;
                    this.ArrangeChartDataOf(this.RegistrationTrendData, "User");
                    // console.log(this.RegistrationTrendData)
                },
                error => {
                    // console.log(error._body);
                    ClientScripts.snackbar(error._body);
                });
        
        this._CourseCatalogService.getRegistrationTrend("course")
        .subscribe(
            data => {
                this.RegistrationTrendCourse = data;
                this.ArrangeChartDataOf(this.RegistrationTrendCourse, "Course");
                this.RTChartReady = true;
                // console.log(this.RegistrationTrendData)
            },
            error => {
                ClientScripts.snackbar(error._body);
            });

    }

    refreshChartDataOf() {
        
        // this.ArrangeChartDataOf();
    }

    getChartArray() {
        this.currentYear = (new Date()).getFullYear();
        this.currentMonth = (new Date()).getMonth();
        
        for(let i=9; i >=0; i--)
            this.yearArray[i] = (this.currentYear - i).toString();
        
        for(let i = 0; i <= this.noOfDayArray[this.currentMonth]; i++) {
            this.dayArray[i] = i.toString();
        }
    }

    ArrangeChartDataOf(RegistrationTrendData?:any, dataLabel?:string) {
        

        this.ChartData = [];

        switch (this.RTPeriod) {
            case 'Day':

                this.RegTrendGraphLabel = this.dayArray;

                this.ChartData = new Array(this.noOfDayArray[this.currentMonth])

                for(let i = 0; i < RegistrationTrendData.length; i++) {
                    
                    if((parseInt(RegistrationTrendData[i]['_id']['month']) == (this.currentMonth + 1)) && (RegistrationTrendData[i]['_id']['year'] == this.currentYear)) {
                        this.ChartData[parseInt(RegistrationTrendData[i]['_id']['day'])] = RegistrationTrendData[i]['count'];
                    }

                }
                for(let i = 0; i <= this.noOfDayArray[this.currentMonth]; i++) {
                    if(!this.ChartData[i])
                        this.ChartData[i] = 0;
                }

                break;

            case 'Month':
                
                this.RegTrendGraphLabel = this.monthArray;

                for(let i = 0; i < RegistrationTrendData.length; i++) {
                    // console.log(this.RegistrationTrendData[i]['_id']['year']);

                    console.log(RegistrationTrendData[i]);

                    if(RegistrationTrendData[i]['_id']['year'] == this.currentYear) {

                        if(this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month'])-1] == undefined)
                            this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month'])-1] = parseInt(RegistrationTrendData[i]['count']);
                        else
                            this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month'])-1] = this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month'])-1] + parseInt(RegistrationTrendData[i]['count']);

                        console.log(this.ChartData[parseInt(RegistrationTrendData[i]['_id']['month'])-1]);

                    }
                }
                
                for(let i=0; i < 12; i++) {
                    if(this.ChartData[i] == undefined)
                        this.ChartData[i] = 0;
                }

                break;

            case 'Year':
                
                this.RegTrendGraphLabel = this.yearArray;
                
                // console.log(this.RegistrationTrendData)

                for(let i = 0; i < RegistrationTrendData.length; i++) {

                    for(let j = 9; j >= 0; j--) {

                        if(RegistrationTrendData[i]['_id']['year'] == this.yearArray[j]) {

                            // console.log(this.RegistrationTrendData[i]['_id']['year'] + '  ' + this.yearArray[j])
                            
                            if(this.ChartData[j] == undefined)
                                this.ChartData[j] = parseInt(RegistrationTrendData[i]['count']);
                            else
                                this.ChartData[j] = this.ChartData[j] + parseInt(RegistrationTrendData[i]['count']);
                        }

                    }

                }

                for(let i=0; i < 10; i++) {
                    if(this.ChartData[i] == undefined)
                        this.ChartData[i] = 0;
                }

                break;
        }

        // this.RegTrendGrphData = [{data:this.ChartData, label:dataLabel}];
        this.RegTrendGrphData.push({data:this.ChartData, label:dataLabel})
        console.log(this.RegTrendGrphData);

        // console.log(this.RegTrendGrphData);

    }

    getLoggedUserCourses() {

        this.CoursesCompleted = 0;
        this.registeredCourseCount = 0;
        this.CreditEarned = 0;
        this.CreditTotal = 0;

        this._CourseCatalogService.getUserCourses()
            .subscribe(
                data => {
                    this.registeredCourses = data;
                    // console.log(data);
                    this.registeredCourseCount = this.registeredCourses? this.registeredCourses.length: 0;
                    for(let i=0; i < this.registeredCourseCount; i++) {
                        
                        if(this.registeredCourses[i]['completed']) {
                            this.CreditEarned = this.CreditEarned + parseInt(this.registeredCourses[i]['credit']);
                            this.CoursesCompleted = this.CoursesCompleted + 1;
                        }

                        this.CreditTotal = this.CreditTotal + parseInt(this.registeredCourses[i]['credit']);
                    }

                })
    }

}