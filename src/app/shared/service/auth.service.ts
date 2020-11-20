/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user.interface';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: Observable<User>;
  private _userSubject: BehaviorSubject<User>;
  private _backendUserURL: any;
  private _isConnected: boolean;

  constructor(private _http: HttpClient) {
    this._userSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user')));
    this._user = this._userSubject.asObservable();
    this._backendUserURL = {};
    let tmp = `${environment.backendUser.protocol}://${environment.backendUser.host}`;

    if (environment.backendUser.port){
      tmp += `:${environment.backendUser.port}`;
    }
    Object.keys(environment.backendUser.endpoints).forEach(x => this._backendUserURL[x] = `${tmp}${environment.backendUser.endpoints[x]}`);
    console.log(this._backendUserURL);
  }

  login(user: User): Observable<User>{
    return this._http.post<User>(this._backendUserURL.verify, user, {headers: new HttpHeaders(
        {
          'Access-Control-Allow-Origin' : '127.0.0.1',
        })})
      .pipe(
        filter(_ => !!_),
        map(_ => {
        sessionStorage.setItem('user', JSON.stringify(_));
        this._isConnected = true;
        return _;
      }),
    );
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this._isConnected = false;
    this._userSubject.next(null);
  }

  get userValue(): User{
    return this._userSubject.value;
  }

  get connected(): boolean{
    return this._isConnected;
  }

  create(user: User): Observable<User>{
    return this._http.post<User>(this._backendUserURL.createUser, user, { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '127.0.0.1',
      })}).pipe(
        mergeMap(_ => this.login(_))
    );
  }

  get user(): Observable<User>{
    return this._user;
  }
}
