import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user.interface';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: Observable<User>;
  private _isConnected: boolean;
  private _userSubject: BehaviorSubject<User>;
  private _backendUserURL: any;

  constructor(private _http: HttpClient) {
    this._userSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user')));
    this._user = this._userSubject.asObservable();
    this._isConnected = false;
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
        return _;
      }),
    );
  }

  get connected(): boolean{
    if (this._userSubject != null){
      if (this._userSubject.value && this._userSubject.value.token !== '') {
        return true;
      }
    }
    return false;
  }

  logout(): void {
    location.reload();
    sessionStorage.removeItem('user');
    this._userSubject.next(null);
  }

  get userValue(): User{
    return this._userSubject.value;
  }

  get user(): Observable<User>{
    return this._user;
  }
}
