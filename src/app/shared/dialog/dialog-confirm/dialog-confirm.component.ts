import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {UserAuth} from '../../interfaces/userAuth.interface';
import {DialogLoginComponent} from '../dialog-login/dialog-login.component';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {

  /**
   * COnstructor for DialogConfirmComponent
   * @param _dialogRef
   * @param _router
   * @param _message
   */
  constructor(private _dialogRef: MatDialogRef<DialogLoginComponent>,
              private _router: Router,
              @Inject(MAT_DIALOG_DATA) private _message: string) {
  }

  ngOnInit(): void {
  }

  /**
   * Message gotten in params (to display)
   */
  get message(): string{
    return this._message;
  }

  /**
   * When cancel button is pushed
   */
  onCancel(): void{
    this._dialogRef.close();
  }


}
