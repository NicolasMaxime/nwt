import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../validators/CustomValidator';
import {ErrorStateMatcher} from '@angular/material/core';
import {PasswordErrorMatcher} from '../validators/PasswordErrorMatcher';
import {UserAuth} from '../../interfaces/userAuth.interface';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {

  private _cancel$: EventEmitter<void>;
  private _submit$: EventEmitter<UserAuth>;
  private _form: FormGroup;
  // A way to verify a group of FormControl
  private _matcher: PasswordErrorMatcher;

  /**
   * Constructor for FormSignInComponent
   */
  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._submit$ = new EventEmitter<UserAuth>();
    this._form = this._buildForm();
    this._matcher = new PasswordErrorMatcher();
  }

  ngOnInit(): void {
  }

  /**
   * Allow event (cancel)
   */
  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  /**
   * Emit void event when cancel is pushed
   */
  onCancel(): void {
    this._cancel$.emit();
  }

  /**
   * Return the form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Return matcher to validate formGroup
   */
  get matcher(): PasswordErrorMatcher{
    return this._matcher;
  }

  /**
   * Validation of the form
   * @private
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
        login: new FormControl('', Validators.required),
        pass: new FormGroup({
          password: new FormControl('', Validators.required),
          verifPassword: new FormControl('', Validators.required)
          }, {validators: CustomValidator.passValidator}),
    }, );
  }

  /**
   * Allow event (save)
   */
  @Output('save')
  get submit$(): EventEmitter<UserAuth>{
    return this._submit$;
  }

  /**
   * Remove verification and keep only the password
   * @param user
   */
  onSubmit(user: UserAuth): void{
    user.password = this._form.get('pass').get('password').value;
    delete user['pass'];
    this._submit$.emit(user);
  }
}
