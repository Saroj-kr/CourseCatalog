import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';

declare var ClientScripts: any;

@Component({
      templateUrl: './history.component.html',
      styleUrls: ['./history.component.css']

  })
export class HistoryComponent implements OnInit {

    registeredCourses: any;

    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {

        this.getLoggedUserCourses();
    }

    getLoggedUserCourses() {

        // this.CoursesCompleted = 0;
        // this.registeredCourseCount = 0;
        // this.CreditEarned = 0;
        // this.CreditTotal = 0;

        this._CourseCatalogService.getUserCourses()
            .subscribe(
                data => {
                    this.registeredCourses = data;
                    // console.log(data);
                    // this.registeredCourseCount = this.registeredCourses.length;
                    // for(let i=0; i < this.registeredCourseCount; i++) {
                        
                    //     if(this.registeredCourses[i]['completed']) {
                    //         this.CreditEarned = this.CreditEarned + parseInt(this.registeredCourses[i]['credit']);
                    //         this.CoursesCompleted = this.CoursesCompleted + 1;
                    //     }

                    //     this.CreditTotal = this.CreditTotal + parseInt(this.registeredCourses[i]['credit']);
                    // }

                })
    }
}