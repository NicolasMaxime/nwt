import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogLoginComponent} from '../../shared/dialog/dialog-login/dialog-login.component';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';
import {UserAuth} from '../../shared/interfaces/userAuth.interface';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  // Private reference to DialogLogin
  private _loginDialog: MatDialogRef<DialogLoginComponent>;

  /**
   * Constructor for ConnexionComponent
   * @param _router
   * @param _auth
   * @param _dialog
   */
  constructor(private _router: Router,
              private _auth: AuthService,
              private _dialog: MatDialog,
              ) {
  }

  ngOnInit(): void {
    this._initModal();
  }

  /**
   * Display and get data from form
   * @private
   */
  private _initModal(): void {
    this._loginDialog = this._dialog.open(DialogLoginComponent, {
      width: '500px',
      disableClose: true
    });

    this._loginDialog.afterClosed()
      .pipe(
        filter(_ => !!_),
        mergeMap(_ => this._auth.login(_)),
    )
    .subscribe(
      () => undefined,
      () => this._router.navigate(['/home']),
      () => this._router.navigate(['/user'])
      );
  }
}
