import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/service/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private _isConnected: boolean;
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  connected(): boolean{
    return this._auth.connected;
  }
}
