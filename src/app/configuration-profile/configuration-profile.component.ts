import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/service/user.service';
import {User} from '../shared/interfaces/user.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogLoginComponent} from '../shared/dialog/dialog-login/dialog-login.component';
import {DialogConfirmComponent} from '../shared/dialog/dialog-confirm/dialog-confirm.component';
import {AuthService} from '../shared/service/auth.service';

@Component({
  selector: 'app-configuration-profile',
  templateUrl: './configuration-profile.component.html',
  styleUrls: ['./configuration-profile.component.css']
})
export class ConfigurationProfileComponent implements OnInit {

  private _user: User;
  private _form: FormGroup;
  // Private reference to DialogLogin
  private _confirmDialog: MatDialogRef<DialogConfirmComponent>;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService,
              private _router: Router,
              private _dialog: MatDialog,
              private _auth: AuthService
              ) {
    this._form = this._buildForm();
  }

  ngOnInit(): void {
    let login = this._route.snapshot.params['login']
    this._userService.getOne(login).subscribe(
      (_:User) => this._user = _,
      () => {
              alert('Vous n\'avez pas accès à cette page');
              this._router.navigate(['/home'])
            },
    () => undefined
    )
  }

  get user(): User{
    return this._user;
  }

  cancel() {

    this._router.navigate(['/user']);
  }

  submit(value: User) {
    let login = this._user.login;
    for (let tmp in value){
      if (!value[tmp]){
        delete value[tmp];
      }
    }
    this._userService.update(value, login).subscribe(
      _ => {
        this._user = _;
        this._router.navigate(['/user'])
      },
      _ => console.log(_)
    )
  }

  get form() : FormGroup{
    return this._form;
  }

  deleteAccount() {
    this._confirmDialog = this._dialog.open(DialogConfirmComponent, {
      width: '400px',
      data: "Do you really want to delete your account ?"
    })

    this._confirmDialog.afterClosed().subscribe(result => {
      if (result){
        this._userService.delete(this._user.login).subscribe( _ => {
          this._auth.logout();
          this._router.navigate(['/home']);
        });
      }
    })
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      firstname: new FormControl('',),
      lastname: new FormControl('',),
      email: new FormControl('', Validators.email)
    });
  }
}
