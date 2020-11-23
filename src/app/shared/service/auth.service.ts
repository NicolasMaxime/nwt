/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserAuth} from '../interfaces/userAuth.interface';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: Observable<UserAuth>;
  private _userSubject: BehaviorSubject<UserAuth>;
  private _backendURL: any;
  private _isConnected: boolean;

  constructor(private _http: HttpClient) {
    this._userSubject = new BehaviorSubject<UserAuth>(JSON.parse(sessionStorage.getItem('user')));
    this._user = this._userSubject.asObservable();
    this._backendURL = {};
    let tmp = `${environment.backend.protocol}://${environment.backend.host}`;

    if (environment.backend.port){
      tmp += `:${environment.backend.port}`;
    }
    Object.keys(environment.backend.endpoints).forEach(x => this._backendURL[x] = `${tmp}${environment.backend.endpoints[x]}`);
  }

  /**
   * trying to log
   * @param user
   */
  login(user: UserAuth): Observable<UserAuth>{
    return this._http.post<UserAuth>(this._backendURL.verify, user, {headers: new HttpHeaders(
        {
          'Access-Control-Allow-Origin' : '127.0.0.1',
          }
        )})
      .pipe(
        filter(_ => !!_),
        map(_ => {
        sessionStorage.setItem('user', JSON.stringify(_));
        this._isConnected = true;
        return _;
      }),
    );
  }

  /**
   * Logging out : Remove sessionStorage's Item
   */
  logout(): void {
    sessionStorage.removeItem('user');
    this._isConnected = false;
    this._userSubject.next(null);
  }

  /**
   * The user's data
   */
  get userValue(): UserAuth{
    return this._userSubject.value;
  }


  /**
   * Tell if connected or not
   */
  get connected(): boolean{
    if (this._isConnected) {
      return this._isConnected;
    }
    else if (this.userValue != null && this.userValue.token !== ''){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   *  Set a header for cors
   *  then Post request to subscribe
   * @param user
   */
  create(user: UserAuth): Observable<UserAuth>{
    return this._http.post<UserAuth>(this._backendURL.createUser, user, { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '127.0.0.1',
      })}).pipe(
        mergeMap(_ => this.login(_))
    );
  }
}
