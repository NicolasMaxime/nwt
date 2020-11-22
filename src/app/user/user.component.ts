import { Component, OnInit } from '@angular/core';
import {UserAuth} from '../shared/interfaces/userAuth.interface';
import {AuthService} from '../shared/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private _user: UserAuth;
  constructor(private _auth: AuthService, private _router: Router) {
  }



  ngOnInit(): void {}
}
