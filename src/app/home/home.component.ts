import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {AuthService} from '../shared/service/auth.service';
import {filter} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {JwtInterceptor} from '../shared/interceptor/jwt.interceptor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
