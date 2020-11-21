import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserAuth} from '../../interfaces/userAuth.interface';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private _cancel$: EventEmitter<void>;
  private _submit$: EventEmitter<UserAuth>;
  private _form: FormGroup;

  /**
   * Constructor for FormLoginComponent
   */
  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._submit$ = new EventEmitter<UserAuth>();
    this._form = this._buildForm();
  }

  ngOnInit(): void {
  }

  /**
   * Allow the  event (cancel)
   */
  @Output('cancel')
  get cancel$(): EventEmitter<any>{
    return this._cancel$;
  }

  /**
   * Emit void event
   */
  onCancel(): void{
    this._cancel$.emit();
  }

  /**
   * Allow the event (save)
   */
  @Output('save')
  get submit$(): EventEmitter<UserAuth>{
    return this._submit$;
  }

  /**
   * Return formGroup
   */
  get form(): FormGroup{
    return this._form;
  }

  /**
   * Emit the user event
   * @param user
   */
  onSubmit(user: UserAuth): void{
    user.token = '';
    this._submit$.emit(user);
  }

  /**
   * To control form's data
   * @private
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
