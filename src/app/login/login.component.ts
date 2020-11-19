import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogLoginComponent} from '../shared/dialog/dialog-login/dialog-login.component';
import {DialogSignInComponent} from '../shared/dialog/dialog-sign-in/dialog-sign-in.component';
import {filter, map} from 'rxjs/operators';
import {User} from '../shared/interfaces/user.interface';
import {AuthService} from '../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _connected: boolean;
  constructor(private _auth: AuthService) {
  }

  ngOnInit(): void {
    this._connected = this._auth.connected;
  }

  get connected(): boolean{
    return this._connected;
  }

  disconnect(): void {
    this._auth.logout();
  }
}
