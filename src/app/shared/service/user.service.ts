import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _backendUserURL: any;

  /**
   * Constructor for LoginService
   * @param _http
   */
  constructor(private _http: HttpClient) {
    let tmp = `${environment.backend.protocol}://${environment.backend.host}`;

    if (environment.backend.port){
      tmp += `:${environment.backend.port}`;
    }
    Object.keys(environment.backend.userEndpoints).forEach(x => this._backendUserURL[x] = `${tmp}${environment.backend.userEndpoints[x]}`);
  }

  /**
   * Get a user with his login
   * @param login
   */
  getOne(login: string): Observable<User>{
    return this._http.get<User>(this._backendUserURL.getOne.replace(':login', login) , {headers: new HttpHeaders(
        {
          'Access-Control-Allow-Origin' : '127.0.0.1',
        })});
  }

}
