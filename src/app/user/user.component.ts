import { Component, OnInit } from '@angular/core';
import {UserAuth} from '../shared/interfaces/userAuth.interface';
import {AuthService} from '../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private _user: UserAuth;

  constructor(private _auth: AuthService, private _route: ActivatedRoute, private _router: Router) {
    this._user = {} as UserAuth;
  }


  /**
   * Getter for user's name
   */
  get name(): string{
    return this._user.login;
  }

  /**
   * Get user name from sesstionStorage
   */
  ngOnInit(): void {
    this._user = JSON.parse(sessionStorage.getItem('user'));
  }
}
