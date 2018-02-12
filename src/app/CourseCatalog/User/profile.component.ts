import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';
import { gender, _User } from '../Model/dataModel';
import { NgForm } from '@angular/forms';

declare var ClientScripts: any;

@Component({
      templateUrl: './profile.component.html'
  })
export class ProfileComponent implements OnInit {

    
    EditEnabled: boolean;
    userDetail: _User;
    uploadedFile: string;

    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router, private el: ElementRef) { }

    ngOnInit(): void {
        this.loadUserDetail();
        this.uploadedFile = "Choose File";
    }

    onGenderChange(Gender:gender) {
        // console.log(Gender);
        this.userDetail.gender = Gender;
    }

    toggleUserUpdateForm() {

        console.log("toggled");

        ClientScripts.toggleFieldset("usrFrmFieldset");
        this.EditEnabled ? this.EditEnabled = false: this.EditEnabled = true;
    }

    onUpdateUser(userForm: NgForm) {

        // if(this.userDetail.gender == gender.female)
        //     this.userDetail.imageURL = '../../assets/images/default_avatar_female.jpg';
        // else
        //     this.userDetail.imageURL = '../../assets/images/default_avatar_male.jpg';
        
        
        if(userForm.valid) {
            console.log("True")
            this._AuthenticationService.updateUser(this.userDetail)
                .subscribe (
                    data => {
                        this._AuthenticationService.setLoggedUserDetail("","",data);
                        this.loadUserDetail();
                        ClientScripts.snackbar("Updated Information");
                        this.toggleUserUpdateForm();
                        // location.reload();
                    },
                    error => {
                        ClientScripts.snackbar(error._body)
                    });
        } else {
            ClientScripts.snackbar("There are errors in form data");
        }
    }

    loadUserDetail() {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        // console.log(this.userDetail);
    }

    uploadImage() {

        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#objImage');
        
        this.uploadedFile = inputEl.files['name'];
        
            //call the angular http method
        this._CourseCatalogService.uploadImage(inputEl)
          .subscribe( 
            data => {
              // this.uploadedImgURL = "http://localhost:2222/" + data["_body"];
              this.userDetail.imageURL = "http://localhost:2222/" + data["_body"];
              // ClientScripts.snackbar("Image Uploaded");
            },
            error=> {
              console.log(error._body)
            })
      }
    
}