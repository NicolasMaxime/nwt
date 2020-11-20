import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../validators/CustomValidator';
import {ErrorStateMatcher} from '@angular/material/core';
import {PasswordErrorMatcher} from '../validators/PasswordErrorMatcher';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {

  private _cancel$: EventEmitter<void>;
  private _submit$: EventEmitter<User>;
  private _form: FormGroup;
  private _matcher: PasswordErrorMatcher;

  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._submit$ = new EventEmitter<User>();
    this._form = this._buildForm();
    this._matcher = new PasswordErrorMatcher();
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

  get matcher(): PasswordErrorMatcher{
    return this._matcher;
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
        login: new FormControl('', Validators.required),
        pass: new FormGroup({
          password: new FormControl('', Validators.required),
          verifPassword: new FormControl('', Validators.required)
          }, {validators: CustomValidator.passValidator}),
    }, );
  }

  @Output('save')
  get submit$(): EventEmitter<User>{
    return this._submit$;
  }

  onSubmit(user: User): void{
    user.password = this._form.get('pass').get('password').value;
    delete user['pass'];
    this._submit$.emit(user);
  }
}
