import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {

  private _cancel$ : EventEmitter<void>;
  private _form: FormGroup;

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

  get form(): FormGroup{
    return this._form;
  }

  private _buildForm(): FormGroup{
    return new FormGroup({
      id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      verifPassword: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }
}
