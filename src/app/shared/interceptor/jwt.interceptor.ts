import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = this._authService.userValue;
    if (user && user.token){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`,
        }
        });
    }
    return next.handle(request);
  }
}
