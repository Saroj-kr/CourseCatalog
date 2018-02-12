import { Component, OnInit, ElementRef } from '@angular/core';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import { NgForm } from '@angular/forms';
import { _Department, _Course } from '../Model/dataModel';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';

declare var ClientScripts: any;

@Component({
      templateUrl: './collection.component.html',
      styleUrls: ['./collection.component.css']
  })

export class CoursesComponent implements OnInit {

  collection: _Course[];
  newObject: any = {};
  departments: _Department[];
  ViewType: string;
  ResponseMsg: string;
  ResponseErr: string;
  userLoggedIn: boolean;
  UserIsAdmin: boolean;
  uploadedFile: string;
  
  constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private el: ElementRef) { }

  ngOnInit() {
    
    this.ViewType = 'Course';
    this.loadCourses();
    this.loadDepartments();
    this.userLoggedIn = this.isUserLoggedIn();
    this.uploadedFile = "Select File";
  }

  loadDepartments() {
    this._CourseCatalogService.getDepartments()
      .subscribe(
        data => {
          this.departments = data;
        },
        error => {
          this.departments = null;
        });
  }

  loadCourses() {
    this._CourseCatalogService.getCourses()
      .subscribe(
        data => {
          this.collection = data;
          for(let i=0; i < this.collection.length; i++) {
              this._CourseCatalogService.getStatus(this.collection[i].department, this.collection[i].id)
                .subscribe(
                    data => {
                        if(data == '-1') {
                            this.collection[i].isRegistered = false;
                        } else {
                            console.log(this.collection[i].id + " " + data);
                            this.collection[i].isRegistered = true;
                            this.collection[i].completed = data;
                        }
                        
                    },
                    error => {
                        console.log(error._body);
                        ClientScripts.snackbar(error._body);
                    }
                )
          }
        },
        error => {
          this.collection = null;
        });
  }

  onAddObject(AddCourseForm: NgForm){
    this._CourseCatalogService.addCourse(this.newObject)
    .subscribe(
        data => {
            ClientScripts.snackbar("Course " + this.newObject.title + " Added Sucessfully");
            ClientScripts.dismissModalJs('AddObjectModal');
            AddCourseForm.reset;
            this.loadCourses();
        },
        error => {
            this.ResponseErr = error._body;
            console.log(error._body);
        });

      this.loadDepartments();
  }

  isUserLoggedIn() {
      if(this._AuthenticationService.getLoggedUserDetail())
          return true;
      else
          return false;
  }

  checkUserIsAdmin(){
      return this._AuthenticationService.getLoggedUserDetail('admin');
  }

  uploadImage() {

    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#objImage');
    
    this.uploadedFile = inputEl.files['name'];
    
        //call the angular http method
    this._CourseCatalogService.uploadImage(inputEl)
      .subscribe( 
        data => {
          // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
          this.newObject['imageURL'] = "http://localhost:2222/" + data["_body"];
          // ClientScripts.snackbar("Image Uploaded");
        },
        error=> {
          console.log(error._body)
        })
  }

}