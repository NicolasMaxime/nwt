import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UserAuth} from '../../interfaces/userAuth.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  /**
   * Constructor for DialogLoginComponent
   * @param _dialogRef
   */
  constructor(private _dialogRef: MatDialogRef<DialogLoginComponent>, private _router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * When cancel button is pushed
   */
  onCancel(): void{
    this._dialogRef.close();
    this._router.navigate(['/home']);
  }

  /**
   * When save button is pushed
   * @param user
   */
  onSave(user: UserAuth): void {
    this._dialogRef.close(user);
  }
}
