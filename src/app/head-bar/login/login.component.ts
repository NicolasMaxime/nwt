import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Say if user is connected or not
  private _connected: boolean;

  /**
   * Constructor for LoginComponent
   * @param _auth : service for authentification
   */
  constructor(private _auth: AuthService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Return isConnected
   */
  get connected(): boolean{
    this._connected = this._auth.connected;
    return this._connected;
  }

  /**
   * To logout
   */
  disconnect(): void {
    this._auth.logout();
    this._router.navigate(['/home']);
  }
}
