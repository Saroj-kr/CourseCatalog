import { Component, OnInit, ElementRef } from '@angular/core';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import { NgForm } from '@angular/forms';
import { _Department } from '../Model/dataModel';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';

declare var ClientScripts: any;

@Component({
      templateUrl: './collection.component.html',
      styleUrls: ['./collection.component.css']
  })

export class DepartmentsComponent implements OnInit {

  ViewType: string;
  collection: _Department[];
  newObject : any = {};
  ResponseMsg: string;
  ResponseErr: string;
  userLoggedIn: boolean;
  UserIsAdmin: boolean;
  uploadedImgURL: string;
  uploadedFile: string;
  
  constructor(private _courseService: CourseService, private _AuthenticationService: AuthenticationService, private el: ElementRef) { }

  ngOnInit() {

    this.ViewType = 'Department';
    this.loadDepartments();
    this.userLoggedIn = this.isUserLoggedIn();
    this.uploadedFile = "Select File";
  }

  loadDepartments() {
    this._courseService.getDepartments()
      .subscribe(
        data => {
          this.collection = data;
          for(let i=0; i < this.collection.length; i++) {
            this._courseService.getStatus(this.collection[i]['id'])
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
                });
          }
        },
        error => {
          this.collection = null;
        });
  }

  onAddObject(AddDeptForm: NgForm){
      this._courseService.addDepartment(this.newObject)
        .subscribe(
          data => {
            ClientScripts.snackbar("Department " + this.newObject.title + "Added Sucessfully");
            this.loadDepartments();
            ClientScripts.dismissModalJs('AddObjectModal');
            AddDeptForm.reset;
          },
          error => {
            this.ResponseErr = error;
            console.log(error._body);
          });

      
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
    this._courseService.uploadImage(inputEl)
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