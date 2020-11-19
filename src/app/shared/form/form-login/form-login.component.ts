import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private _cancel$: EventEmitter<void>;
  private _form: FormGroup;

  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  ngOnInit(): void {
  }

  @Output('cancel')
  get cancel$(): EventEmitter<any>{
    return this._cancel$;
  }

  onCancel(): void{
    console.log('ok');
    this._cancel$.emit();
  }

  get form(): FormGroup{
    return this._form;
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    return ;
  }
}
