import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(public _authService: AuthService, public _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = JSON.parse(sessionStorage.user).token;
    const tokenPayload = decode(token);
    // @ts-ignore
    if (!this._authService.connected || tokenPayload.admin !== true) {
      this._router.navigate(['home']);
      return false;
    }
    return true;
  }
}
