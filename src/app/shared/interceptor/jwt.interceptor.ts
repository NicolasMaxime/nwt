import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';
import {UserAuth} from '../interfaces/userAuth.interface';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  /**
   * Add the user token to the header of the request
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user: UserAuth = this._authService.userValue;
    if (user && user.token){
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${user.token} ${user.login}`,
        }
      });
    }
    return next.handle(request);
  }
}
