import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private _cancel$: EventEmitter<void>;
  private _submit$: EventEmitter<User>;
  private _form: FormGroup;

  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._submit$ = new EventEmitter<User>();
    this._form = this._buildForm();
  }

  ngOnInit(): void {
  }

  @Output('cancel')
  get cancel$(): EventEmitter<any>{
    return this._cancel$;
  }

  onCancel(): void{
    this._cancel$.emit();
  }

  @Output('save')
  get submit$(): EventEmitter<User>{
    return this._submit$;
  }

  get form(): FormGroup{
    return this._form;
  }

  onSubmit(user: User): void{
    user.token = '';
    this._submit$.emit(user);
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
