import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogLoginComponent} from '../shared/dialog/dialog-login/dialog-login.component';
import {DialogSignInComponent} from '../shared/dialog/dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Private property to set dialog connexion status
  private _dialogStatusConnexion: string;
  // private property to set dialog inscription status
  private _dialogStatusInscription: string;
  // private property to set if connected
  private _isConnected: boolean;

  // private reference to DialogLogin
  private _loginDialog: MatDialogRef<DialogLoginComponent>;
  // private reference to DialogSignIn
  private _signInDialog: MatDialogRef<DialogSignInComponent>;

  constructor(private _dialog: MatDialog) {
    this._dialogStatusConnexion = 'inactive';
    this._dialogStatusInscription = 'inactive';
    this._isConnected = false;
  }

  ngOnInit(): void {
  }

  get dialogStatusConnexion(): string {
    return this._dialogStatusConnexion;
  }

  get dialogStatusInscription(): string {
    return this._dialogStatusInscription;
  }

  get isConnected(): boolean{
    return this._isConnected;
  }

  showDialogConnexion(): void {
    this._dialogStatusConnexion = 'active';
    this._dialogStatusInscription = 'active';
    this._loginDialog = this._dialog.open(DialogLoginComponent, {
      width: '500px',
      disableClose: true
    });

    this._loginDialog.afterClosed().subscribe( _ => {
      this._dialogStatusConnexion = 'inactive';
      this._dialogStatusInscription = 'inactive';
    });
  }

  showDialogInscription(): void {
    this._dialogStatusInscription = 'active';
    this._dialogStatusConnexion = 'active';
    this._signInDialog = this._dialog.open(DialogSignInComponent, {
      width: '500px',
      disableClose: true
    });

    this._signInDialog.afterClosed().subscribe( _ => {
      this._dialogStatusInscription = 'inactive';
      this._dialogStatusConnexion = 'inactive';
    });
  }

  disconnect(): void {
    this._isConnected = false;
  }
}
