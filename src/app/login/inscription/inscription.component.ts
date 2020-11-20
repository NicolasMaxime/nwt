import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogSignInComponent} from '../../shared/dialog/dialog-sign-in/dialog-sign-in.component';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';
import {find, map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  // private property to set dialog inscription status
  private _dialogStatusInscription: string;
  // private reference to DialogLogin
  private _signInDialog: MatDialogRef<DialogSignInComponent>;

  constructor(private _router: Router, private _dialog: MatDialog, private _auth: AuthService) {
  }

  ngOnInit(): void {
    this._initModal();
  }

  private _initModal(): void {
    this._signInDialog = this._dialog.open(DialogSignInComponent, {
      width: '500px',
      disableClose: true
    });

    this._signInDialog.afterClosed()
      .pipe(
        map(_ => {
          _.token = '';
          return _;
        }),
        mergeMap((_: User) => this._auth.create(_))
      )
      .subscribe(
        () => this._router.navigate(['home']),
      () => this._router.navigate(['home']),
      () => this._router.navigate(['home'])
    );
  }
}
