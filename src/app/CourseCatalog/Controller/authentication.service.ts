import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { _User } from '../Model/dataModel';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    
    _serviceUrl = "http://localhost:2222/api/user/"

    constructor(private http: Http ) { }

    login( username, password ): any {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this._serviceUrl + 'authenticate', {username: username, password: password}, {headers: headers})
            .map(res => res.json());
    }

    register(user: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._serviceUrl + 'register', user, {headers:headers})
            .map(res => res.json());
    }

    updateUser(user: _User) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // console.log(user)
        // console.log(this._serviceUrl + 'update');
        return this.http.post(this._serviceUrl + 'update', user, {headers:headers})
            .map(res => res.json());
    }

    updateAdmin(id: string, adminStatus: boolean) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._serviceUrl + 'update/admin', {'id': id, 'admin': adminStatus}, {headers:headers})
            .map(res => res.json());
    }

    getUsers(OrderBy?: string, limit?:number) {
        if(!limit)
         limit = 0;
        if (!OrderBy)
         OrderBy = "none";
        
        return this.http.get(this._serviceUrl + 'get/'+ OrderBy + '/' + limit)
            .map(res => res.json());
       // return this.http.get(this.serviceUrl + this.userUrl + '/get/'+ OrderBy + '/' + limit).map(res => JSON.parse(res.json()));
       
     }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
    }

    verifyCreation(email) {
        return this.http.get(this._serviceUrl + 'verifyCreation/' + email)
            .map( res => {
                return res  ;
            });
    }

    getLoggedUserDetail(parameter?: string) {
        var LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
        if(LoggedInUser) {
          if(parameter)
            return LoggedInUser[parameter];
          else
            return LoggedInUser;
        }
        else
            return null;
    }
  
    setLoggedUserDetail(key?:string, value?:string, LoggedInUser?: _User)
    {
        if(!LoggedInUser) {
            LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
  
            if(!LoggedInUser)
              var LoggedInUser: _User ;
  
            if(key && value) {
                 {
                    LoggedInUser[key] = value;
                }
            }
        }
  
        localStorage.setItem('LoggedInUser', JSON.stringify(LoggedInUser));
    }
}