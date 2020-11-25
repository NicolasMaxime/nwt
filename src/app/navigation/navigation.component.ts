import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/service/auth.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogChatComponent} from '../shared/dialog/dialog-chat/dialog-chat/dialog-chat.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private _chatDialog: MatDialogRef<DialogChatComponent>;
  private _isConnected: boolean;

  /**
   * Constructor for NavifationComponent
   * @param _auth
   * @param _router
   */
  constructor(private _auth: AuthService, private _router: Router, private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * Get is user is connected
   */
  connected(): boolean{
    return this._auth.connected;
  }

  /**
   * To logout
   */
  disconnect(): void {
    this._auth.logout();
    this._router.navigate(['/home']);
  }

  /**
   * Open Chat
   */
  showChat(): void {
    this._chatDialog = this._dialog.open(DialogChatComponent, {
    });
  }
}
