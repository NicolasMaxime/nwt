import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.css']
})
export class DialogSignInComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<DialogSignInComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void{
    this._dialogRef.close();
  }

  onSave(): void {
    this._dialogRef.close();
  }

}
