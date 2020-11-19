import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {

  private _cancel$ : EventEmitter<void>;

  constructor() {
    this._cancel$ = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  @Output('cancel')
  get cancel$(): EventEmitter<void>{
    return this._cancel$;
  }

  onCancel():void {
    this._cancel$.emit();
  }
}
