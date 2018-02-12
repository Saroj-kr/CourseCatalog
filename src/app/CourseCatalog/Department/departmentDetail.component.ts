import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import { _Department, _Course } from '../Model/dataModel';
import { Console } from '@angular/core/src/console';
import { error } from 'util';
import '../../../assets/js/AdditionalScript.js';
import { NgForm } from '@angular/forms';

declare var ClientScripts: any;

@Component({
      templateUrl: './detail.component.html',
      styleUrls: ['./detail.component.css']
  })
export class DepartmentDetailComponent implements OnInit {

    DetailedObject: _Department;
    DetailedObjectEdit: any = {};
    CurrentUserID: string;
    NoOfCourses: number;
    Courses: _Course[];
    popularCourses: _Course[];
    registeredCourses: _Course[];
    newCourse: any = {};
    ResponseErr: false;
    AvailableCredit: number;
    CreditsOccupied: number = 0;
    DeptID: string;
    HomeLink: string;
    ViewType: string;
    UserIsAdmin: boolean;
    fieldIsErrorPage: boolean = true;
    userLoggedIn: boolean;
    completeChartData: any;
    ChartData: Array<number> = [];
    ChartLabels: Array<string> = [];
    ChartLegend: boolean;
    chartType: string;

    uploadedFile:string;
    UploadedFileEdit:string;

    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router, private el: ElementRef) { }

    ngOnInit(): void {
        this.route.params.forEach( Params => {
            if (Params.deptId) {
                this.DeptID = Params.deptId;
            }
        });

        this.ViewType = "Department";
        this.LoadDepartmentInfo();
        // this.loadDepartmentCourses();
        this.userLoggedIn = this.isUserLoggedIn();
        this.HomeLink = '';

        this.UserIsAdmin = this.checkUserIsAdmin()
        this.uploadedFile = "Choose Image";
        
    }

    loadChartData() {
        this._CourseCatalogService.getTopCourses(this.DeptID)
            .subscribe(
                data => {
                    // console.log(data);
                    this.completeChartData = data;
                    console.log(this.completeChartData);
                    if(this.completeChartData.length > 0) {
                        for(let i=0; i < this.completeChartData.length; i++) {
                            this.ChartData[i] = this.completeChartData[i]['count'];
                            this.ChartLabels[i] = this.completeChartData[i]['title'];
                        }
                    } else {
                        this.ChartData = [];
                        this.ChartLabels = [];
                    }

                    this.chartType = 'pie';
                },
                error => {
                    console.log(error._body);
                }
            )
    }

    loadDetailedObject() {
        this._CourseCatalogService.getDepartment(this.DeptID)
            .subscribe(
                data => {
                    this.DetailedObject = data;
                    this.fieldIsErrorPage = false;

                    this._CourseCatalogService.getStatus(this.DetailedObject.id)
                        .subscribe(
                            data => {
                                if(data == '-1') {
                                    this.DetailedObject.isRegistered = false;
                                } else {
                                    console.log(this.DetailedObject.id + " " + data);
                                    this.DetailedObject.isRegistered = true;
                                    this.DetailedObject.completed = data;
                                    this.UploadedFileEdit = this.DetailedObject.imageURL;
                                }
                            },
                            error => {
                                console.log(error._body);
                            }
                        )
                });
    }

    loadDepartmentCourses() {
        this._CourseCatalogService.getCoursesForDepartment(this.DeptID)
        .subscribe(
            data => {
                this.Courses = data;
                this.NoOfCourses = data.length;
                for(let i=0; i< this.Courses.length; i++)
                {
                    this.CreditsOccupied += +this.Courses[i].credits;
                    this._CourseCatalogService.getStatus(this.DetailedObject.id, this.Courses[i].id)
                        .subscribe(
                            data => {
                                if(data == '-1') {
                                    this.Courses[i].isRegistered = false;
                                } else {
                                    console.log(this.Courses[i].id + " " + data);
                                    this.Courses[i].isRegistered = true;
                                    this.Courses[i].completed = data;
                                }
                                
                            },
                            error => {
                                console.log(error._body);
                                ClientScripts.snackbar(error._body);
                            }
                        )
                }
                this.AvailableCredit = 100 - this.CreditsOccupied;
            });
    }

    loadPopularCourses() {
        this._CourseCatalogService.getCoursesForDepartment(this.DeptID, "Registrations")
        .subscribe(
            data => {
                this.popularCourses = data;
                var max = this.popularCourses.length > 10 ? 10 : this.popularCourses.length;
                console.log(data);
                for(let i=0; i< max; i++)
                {
                    console.log(this.popularCourses[i]);
                    this._CourseCatalogService.getStatus(this.DetailedObject.id, this.popularCourses[i].id)
                        .subscribe(
                            data => {
                                if(data == '-1') {
                                    this.popularCourses[i].isRegistered = false;
                                } else {
                                    console.log(this.popularCourses[i].id + " " + data);
                                    this.popularCourses[i].isRegistered = true;
                                    this.popularCourses[i].completed = data;
                                }
                                console.log(this.popularCourses[i])
                                
                            },
                            error => {
                                console.log(error._body);
                                ClientScripts.snackbar(error._body);
                            }
                        )
                }

                this.popularCourses.sort((course1,course2)=> +course1.totalRegistration - course2.totalRegistration);

            });
    }

    loadUserCourses() {
        this._CourseCatalogService.getUserCourses(this.DeptID)
            .subscribe(
                data => {
                    console.log(data);
                    this.registeredCourses = data;
                    // for(let i=0; i < data.length; i++) {
                    //     // console.log(data[i]['CourseDetail'][0]);
                    //     this.registeredCourses.push(data[i]['CourseDetail'][0]);
                    // }
                })
    }

    LoadDepartmentInfo() {

        this.loadDetailedObject();
        
        this.refreshCourseList();
            
    }

    refreshCourseList() {

        this.loadDepartmentCourses();
        
        this.loadPopularCourses();

        this.loadUserCourses();
        
        this.loadChartData();
    }

    isUserLoggedIn() {
        if(this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    }

    notRegistered(courseId:string) {
        return true;
    }

    onRegisterClick(_courseId) {

        if(_courseId) {
            console.log("Course Register")
            this._CourseCatalogService.registerIn(this.DetailedObject.id, _courseId)
                .subscribe(
                    data => {
                        ClientScripts.snackbar("You are now registered into all the courses, expected the already registered, If any !!")
                        this.LoadDepartmentInfo();
                    },
                    error => {
                        ClientScripts.snackbar(error._body);
                    }
                );
        } else {
            console.log("Department Register")
            this._CourseCatalogService.registerIn(this.DetailedObject.id)
                .subscribe(
                    data => {
                        if(data == "1") {
                            ClientScripts.snackbar("You have been sucessfully registered into the course")
                            this.LoadDepartmentInfo();
                        } else if(data == "0") {
                            ClientScripts.snackbar("Already Registerd for this course!! Please refresh the page")
                        }
                     },
                    error => {
                        ClientScripts.snackbar(error._body);
                     }
                )
        }

        
    }

    checkUserIsAdmin()
    {
        return this._AuthenticationService.getLoggedUserDetail('admin');
    }

    onUpdateObject(DepartmentUpdateForm: NgForm) {
        this._CourseCatalogService.updateDepartment(this.DetailedObject)
            .subscribe(
                data => {
                    // console.log(this.DetailedObject);
                    ClientScripts.snackbar("Department updated Sucessfully");
                    this.loadDetailedObject();
                },
                error => {
                    this.ResponseErr = error;
                    console.log(error._body);
                });

        
    }

    onAddCourse(CourseForm: NgForm) {
        // console.log(this.newCourse);
        this.newCourse['department'] = this.DetailedObject.id;
        this._CourseCatalogService.addCourse(this.newCourse)
            .subscribe(
                data => {
                    ClientScripts.snackbar("Course " + this.newCourse.title + " Added Sucessfully");
                    ClientScripts.dismissModalJs('AddCourseModal');
                    CourseForm.reset;
                    this.refreshCourseList();
                },
                error => {
                    this.ResponseErr = error._body;
                    console.log(error._body);
                });

        this.loadDepartmentCourses();
    }

    onChange(ChartType: string) {
        // console.log(ChartType);
        this.chartType = ChartType;
    }


    onDeleteClick() {
        this._CourseCatalogService.deleteDepartment(this.DetailedObject.id)
            .subscribe(
                data => {
                    ClientScripts.snackbar("Deleted Department " + this.DetailedObject.title);
                    this.router.navigate(['/departments']);
                },
                error => {
                    ClientScripts.snackbar(error._body);
                    
                });
    }

    onUnRegisterClick() {
        this._CourseCatalogService.setStatus("unregister", this.DetailedObject.id)
            .subscribe(
                data => {
                    ClientScripts.snackbar("You are unregistered from all courses in department!! except the completed ones. If any !!");
                    this.LoadDepartmentInfo();
                },
                error => {
                    ClientScripts.snackbar(error._body);
                })
    }

    onCompletedClick() {
        this._CourseCatalogService.setStatus("complete", this.DetailedObject.id)
            .subscribe(
                data => {
                    ClientScripts.snackbar("All registered courses has been marked as completed");
                    this.LoadDepartmentInfo();
                },
                error => {
                    ClientScripts.snackbar(error._body);
                })
    }

    uploadImage() {

        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#objImage');
        
        this.uploadedFile = inputEl.files['name'];
        
            //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
          .subscribe( 
            data => {
              // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
              this.DetailedObject['imageURL'] = "http://localhost:2222/" + data["_body"];
              // ClientScripts.snackbar("Image Uploaded");
            },
            error=> {
              console.log(error._body)
            })
    }

    uploadImageEdit() {
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#objImageEdit');
        
        this.uploadedFile = inputEl.files['name'];
        
            //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
          .subscribe( 
            data => {
              // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
              this.DetailedObject['imageURL'] = "http://localhost:2222/" + data["_body"];
              // ClientScripts.snackbar("Image Uploaded");
            },
            error=> {
              console.log(error._body)
            })
    }

}