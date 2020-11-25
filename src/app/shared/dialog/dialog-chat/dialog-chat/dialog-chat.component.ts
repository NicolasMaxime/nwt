import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-chat',
  templateUrl: './dialog-chat.component.html',
  styleUrls: ['./dialog-chat.component.css']
})
export class DialogChatComponent implements OnInit {

  /**
   * Constructor for DialogLoginComponent
   * @param _dialogRef
   */
  constructor(private _dialogRef: MatDialogRef<DialogChatComponent>, private _router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * When cancel button is pushed
   */
  onClose(): void{
    this._dialogRef.close();
    this._router.navigate(['/home']);
  }

}
