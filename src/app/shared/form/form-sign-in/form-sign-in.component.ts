import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../validators/CustomValidator';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {

  private _cancel$: EventEmitter<void>;
  private _form: FormGroup;

  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  ngOnInit(): void {
  }

  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  onCancel(): void {
    this._cancel$.emit();
  }

  get form(): FormGroup {
    return this._form;
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
        login: new FormControl('', Validators.required),
        pass: new FormGroup({
          password: new FormControl('', Validators.required),
          verifPass: new FormControl('', Validators.required)
          }, CustomValidator.passValidator)
    });
  }
}
