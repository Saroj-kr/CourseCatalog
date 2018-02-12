import { Component, OnInit, transition, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import { _Department, _Course } from '../Model/dataModel';
import { Console } from '@angular/core/src/console';
import { error } from 'util';
import { NgForm } from '@angular/forms';
import '../../../assets/js/AdditionalScript.js';

declare var ClientScripts: any;

@Component({
      templateUrl: './detail.component.html',
      styleUrls: ['./detail.component.css']
  })
export class CourseDetailComponent implements OnInit {

    courses: _Course[];
    DetailedObject: _Course;
    CourseID: string;
    DeptID: string;
    HomeLink: string;
    ViewType: string;
    ResponseErr: string;
    fieldIsErrorPage: boolean = true;
    UserIsAdmin:boolean;
    userLoggedIn: boolean;
    uploadedFileEdit: string;

    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router, private el: ElementRef) { }

    ngOnInit(): void {

        this.ViewType = "Course";

        this.route.params.forEach( Params => {
            if (Params.deptId) {
                this.DeptID = Params.deptId;
            }
            if (Params.courseId) {
                this.CourseID = Params.courseId;
            }
        });
        
        this.loadCourseDetail();
        this.userLoggedIn = this.isUserLoggedIn();
        this.fieldIsErrorPage = false;

        this.UserIsAdmin = this.checkUserIsAdmin();
        
    }

    loadCourseDetail()
    {
        this._CourseCatalogService.getCourse(this.CourseID)
            .subscribe (
                data => {
                    this.DetailedObject = data;
                    this._CourseCatalogService.getStatus(this.DetailedObject.department, this.DetailedObject.id)
                        .subscribe(
                            data => {
                                if(data == '-1') {
                                    this.DetailedObject.isRegistered = false;
                                } else {
                                    console.log(this.DetailedObject.id + " " + data);
                                    this.DetailedObject.isRegistered = true;
                                    this.DetailedObject.completed = data;
                                    this.uploadedFileEdit = this.DetailedObject.imageURL;
                                }
                            },
                            error => {
                                console.log(error._body);
                                ClientScripts.snackbar("There was some error fetching data, Please try again later");
                            }
                        )
                    // this._CourseCatalogService.isRegistered(this.DetailedObject.department, this.DetailedObject.id)
                    //         .subscribe(
                    //             data => {
                                    
                    //                 this.DetailedObject['isRegistered'] = data;
                    //             },
                    //             error => {
                    //                 ClientScripts.snackbar(error);
                    //             }
                    //         )
                    this.fieldIsErrorPage = false;
                },
                error => {
                    this.fieldIsErrorPage = true;
                }
            )
    }

    checkUserIsAdmin()
    {
        if(this._AuthenticationService.getLoggedUserDetail('admin'))
            return true;
        else
            return false;
    }

    onUpdateObject(CourseUpdateForm: NgForm) {
        this._CourseCatalogService.updateCourse(this.DetailedObject)
            .subscribe(
                data => {
                    ClientScripts.snackbar("Course updated Sucessfully");
                    this.loadCourseDetail();
                },
                error => {
                    this.ResponseErr = error;
                    console.log(error);
                });
    }

    RegisterIn(){
        console.log("Clicked");
        this._CourseCatalogService.registerIn(this.DetailedObject.department, this.DetailedObject.id)
            .subscribe(
                data => {
                    ClientScripts.snackbar("Registration into Course was sucessfull");
                    this.DetailedObject['isRegistered'] = true;
                },
                error => {
                    ClientScripts.snackbar(error._body);
                }
            )
    }

    isUserLoggedIn() {
        if(this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    }

    onDeleteClick() {
        this._CourseCatalogService.deleteCourse(this.DetailedObject.id)
            .subscribe(
                data => {
                    ClientScripts.snackbar("Deleted Course " + this.DetailedObject.title);
                    this.router.navigate(['/department/' + this.DetailedObject.department]);
                },
                error => {
                    ClientScripts.snackbar(error._body);
                });
        // this.router.navigate(['/Department']);
    }

    onUnRegisterClick() {
        this._CourseCatalogService.setStatus("unregister", this.DetailedObject.department, this.DetailedObject.id)
            .subscribe(
                data => {
                    if(data) {
                        ClientScripts.snackbar("You are unregistered from this course");
                        this.DetailedObject.isRegistered = false;
                    } else {
                        ClientScripts.snackbar("Could not unregister currently, Try again later")
                    }
                },
                error => {
                    console.log(error._body);
                    ClientScripts.snackbar("There was some error" + error._body);
                })
    }

    onCompletedClick() {
        this._CourseCatalogService.setStatus("complete", this.DetailedObject.department, this.DetailedObject.id)
            .subscribe(
                data => {
                    ClientScripts.snackbar("Course Marked as completed");
                    this.DetailedObject.isRegistered = true;
                    this.DetailedObject.completed = true;
                    console.log(this.DetailedObject.completed);
                },
                error => {
                    ClientScripts.snackbar(error._body);
                })
    }

    uploadImage() {

        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#objImageEdit');
        
        this.uploadedFileEdit = inputEl.files['name'];
        
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