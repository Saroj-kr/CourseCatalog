import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthValidator implements CanActivate {

    constructor(private router: Router, private _AuthenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._AuthenticationService.getLoggedUserDetail()) {
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        window.alert("You don't have permission to view this page !! click on ok to redirect");
        this.router.navigate(['/']); //coment this line to activate AuthGuard
        return false;
    }
}