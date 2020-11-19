import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogLoginComponent} from '../shared/dialog/dialog-login/dialog-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Private property to set dialog status
  private _dialogStatus: string;
  // private property to set if connected
  private _isConnected: boolean;
  // private reference to LoginDialog
  private _loginDialog: MatDialogRef<DialogLoginComponent>;

  constructor(private _dialog: MatDialog) {
    this._dialogStatus = 'inactive';
    this._isConnected = false;
  }

  ngOnInit(): void {
  }

  get dialogStatus(): string {
    return this._dialogStatus;
  }

  showDialog(): void {
    this._dialogStatus = 'active';
    this._loginDialog = this._dialog.open(DialogLoginComponent, {
      width: '500px',
      disableClose: true
    });

    this._loginDialog.afterClosed().subscribe( _ => this._dialogStatus = 'inactive');
  }
}
