import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogLoginComponent} from '../shared/dialog/dialog-login/dialog-login.component';
import {DialogSignInComponent} from '../shared/dialog/dialog-sign-in/dialog-sign-in.component';
import {filter, map} from 'rxjs/operators';
import {User} from '../shared/interfaces/user.interface';
import {AuthService} from '../shared/service/auth.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _connected: boolean;

  constructor(private router: Router, private _auth: AuthService) {
    router.events.pipe(
      filter((events: RouterEvent) => events instanceof NavigationEnd),
    ).subscribe((val) => {
      if (val.url === 'LoginPage Url') { // Fill with your loginPage Url (eg. /tabs/tab1)
        location.reload(); // Refresh your form
      }
    });
  }

  ngOnInit(): void {
  }

  get connected(): boolean{
    this._connected = this._auth.connected;
    return this._connected;
  }

  disconnect(): void {
    this._auth.logout();
  }
}
