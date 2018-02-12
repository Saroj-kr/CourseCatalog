import { Component, OnInit } from '@angular/core';
import { CourseService } from './CourseCatalog/Controller/course.service';
import { _User } from './CourseCatalog/Model/dataModel';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './CourseCatalog/Controller/authentication.service'
import { AuthValidator } from './CourseCatalog/Controller/authValidator.service'
import { transition } from '@angular/core/src/animation/dsl';
import { error } from 'selenium-webdriver';
import '../assets/js/AdditionalScript';
import { Location } from '@angular/common';

declare var ClientScripts: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    isHomeURL: boolean;
    isDepartmentURL: boolean;
    isCourseURL:boolean
    DepartmentsLink: string;
    CoursesLinks
    HomeLink: string;
    userDetail: _User;
    model: any = {};
    user: any = {};
    loginloading: boolean = false;
    signupLoading: boolean = false;
    UserLoggedIn: boolean;
    responseMsg: string;
    activity: string;
    error:boolean;
    isAdmin:boolean;
    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.DepartmentsLink = "department";
        this.CoursesLinks = "courses"
        this.HomeLink = "";
        
        this.isHomeURL = location.pathname == '/'? true:false;
        this.isDepartmentURL = location.pathname == '/departments'? true:false;
        this.isCourseURL = location.pathname == '/courses'? true:false

        this.getUserDetail();
    }

    isUserLoggedIn() {
        if(this.userDetail)
            return true;
        else
            return false;
    }

    getUserDetail() {
        this.userDetail = this._AuthenticationService.getLoggedUserDetail();
        this.UserLoggedIn = this.isUserLoggedIn();
        this.isAdmin = this.isAdminOrNot();
    }

    onLogin(f: NgForm) {
        this.loginloading = true;
        this.activity = "login";
        this._AuthenticationService.login(this.model.username, this.model.password)
          .subscribe(
            data => {
                this.error = false;
                this._AuthenticationService.setLoggedUserDetail('','',data);
                this.getUserDetail();
                this.loginloading = false;
                ClientScripts.dismissModalJs('LoginModal');
                f.reset();
                ClientScripts.snackbar("You are logged in sucessfully");
            },
            error => {
                this.loginloading = false;
                this.error = true;
                this.responseMsg = error._body;
            });
    }

    onSignUp(sf: NgForm) {
        this.signupLoading = true;
        this.activity = "register";
        this._AuthenticationService.register(JSON.stringify(this.user))
          .subscribe(
            data => {
              this.error = false;
              this.signupLoading = false;
              this.responseMsg = "User registered sucessfully";
              ClientScripts.dismissModalJs('LoginModal');
              sf.reset();
            },
            error => {
              this.error = true;
              this.signupLoading = false;
              this.responseMsg = error._body;
            }
        )
    }

    onSignOut() {
        ClientScripts.snackbar("Logging Out");
        this.userDetail = null;
        this.UserLoggedIn = false;
        this.isAdmin = false;
        this._AuthenticationService.logout();
        this.router.navigate(['/']);
        // location.reload();
    }

    isAdminOrNot() {
        if(this._AuthenticationService.getLoggedUserDetail('admin') == "true")
            return true;
        else
            return false;
    }
}
