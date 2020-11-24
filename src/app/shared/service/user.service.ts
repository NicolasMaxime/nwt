import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _backendURL: any;

  /**
   * Constructor for LoginService
   * @param _http
   */
  constructor(private _http: HttpClient) {
    this._backendURL = {};
    let tmp = `${environment.backend.protocol}://${environment.backend.host}`;

    if (environment.backend.port){
      tmp += `:${environment.backend.port}`;
    }
    Object.keys(environment.backend.endpoints).forEach(x => this._backendURL[x] = `${tmp}${environment.backend.endpoints[x]}`);
  }

  /**
   * Return HttpHeaders option
   * @private
   */
  private _option() : HttpHeaders{
    return new HttpHeaders(
        {
          'Access-Control-Allow-Origin' : '127.0.0.1'
        })
  }

  /**
   * Get a user with his login
   * @param login
   */
  getOne(login: string): Observable<User>{
    return this._http.get<User>(this._backendURL.getOne.replace(':login', login) , {headers: this._option()});
  }

  /**
   * update an user
   * @param value
   * @param login
   */
  update(value: User, login: string): Observable<any> {
    return this._http.put<User>(this._backendURL.getOne.replace(':login', login), value, {headers: this._option()});
  }

  /**
   * delete an user
   * @param login
   */
  delete(login: string) {
    return this._http.delete<User>(this._backendURL.getOne.replace(':login', login), {headers: this._option()})
  }
}
