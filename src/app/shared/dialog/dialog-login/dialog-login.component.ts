import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<DialogLoginComponent>) {
  }

  ngOnInit(): void {
  }

  onCancel(): void{
    this._dialogRef.close();
  }

  onSave(user: User): void {
    this._dialogRef.close(user);
  }
}
