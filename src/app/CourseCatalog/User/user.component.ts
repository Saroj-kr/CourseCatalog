import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import { _Department, _Course, _User, gender } from '../Model/dataModel';
import { Console } from '@angular/core/src/console';
import { NgForm } from '@angular/forms';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';

declare var ClientScripts: any;

@Component({
      templateUrl: './user.component.html',
      styleUrls: ['./user.component.css']
  })
export class UserComponent implements OnInit {

    userDetail:_User;
    userId: string;
    UserIsAdmin:boolean;
    userUpdateFormEnabled: boolean;
    ActivatedURL: string;
    

    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router) {
        
     }

    ngOnInit(): void {
        this.loadUserDetail();
        console.log("Parent component");
        this.activatedSidebar();
     }

    isUserLoggedIn() {
        if(this._AuthenticationService.getLoggedUserDetail())
            return true;
        else
            return false;
    }

    activatedSidebar() {
        switch (location.pathname) {
          case "/user/dashboard":
              this.ActivatedURL = "dashboard";
            break;
    
          case "/user/adminMgmt":
              this.ActivatedURL = "adminMgmt";
            break;
    
          case "/user/profile":
              this.ActivatedURL = "profile";
            break;
    
          case "/user/history":
              this.ActivatedURL = "history";
            break;
        }
      }

    checkUserIsAdmin() {
        return this._AuthenticationService.getLoggedUserDetail('admin');
    }
    
    loadUserDetail() {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        console.log(this.userDetail);
    }

}