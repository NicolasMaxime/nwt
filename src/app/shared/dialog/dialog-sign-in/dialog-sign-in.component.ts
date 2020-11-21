import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UserAuth} from '../../interfaces/userAuth.interface';

@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.css']
})
export class DialogSignInComponent implements OnInit {

  /**
   * Constructor for DialogSignInComponent
   * @param _dialogRef
   */
  constructor(private _dialogRef: MatDialogRef<DialogSignInComponent>) { }

  ngOnInit(): void {
  }

  /**
   * when cancel button is pushed
   */
  onCancel(): void{
    this._dialogRef.close();
  }

  /**
   * When save button is pushed
   * @param user
   */
  onSave(user: UserAuth): void {
    this._dialogRef.close(user);
  }

}
