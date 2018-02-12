import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../Controller/course.service';
import { AuthenticationService } from '../Controller/authentication.service';
import '../../../assets/js/AdditionalScript.js';
import { error } from 'util';
import { _User } from '../Model/dataModel';

declare var ClientScripts: any;

@Component({
      templateUrl: './adminMgmt.component.html'
  })
export class AdminMgmtComponent implements OnInit {


    AllUsers: _User[];
    
    constructor(private _CourseCatalogService: CourseService, private _AuthenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {

        console.log(this.checkUserIsAdmin());

        if(this.checkUserIsAdmin()) {
            console.log("Executed");
            // this.RTChartReady = false;
            this.getUsers();
            
        }

    }

    checkUserIsAdmin() {
        if(this._AuthenticationService.getLoggedUserDetail('admin') == "true")
            return true;
        else
            return false;
    }

    getUsers() {
        return this._AuthenticationService.getUsers()
            .subscribe(
                data => {
                    this.AllUsers = JSON.parse(data);
                    console.log(this.AllUsers);
                }
            )
    }

    AdminSelectChange(id:string, name:string, admin:boolean) {
        // console.log(id + ' ' + name + ' ' + admin);
        this._AuthenticationService.updateAdmin(id, admin)
            .subscribe(
                data => {
                    if(data.admin == 'false') {
                        ClientScripts.snackbar("Admin acess revoked for " + name);
                    }
                    else {
                        ClientScripts.snackbar(name + "is Admin now");
                    }
                },
                error => {
                    console.log(error._body);
                }
            )
    }

}