import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export class CustomValidator{
  static passValidator(control: AbstractControl): ValidationErrors | null {
    let pass: string = control.get('password').value;
    let verifPass: string = control.get('verifPassword').value;
    return pass === verifPass ? null : {passValidator: true};
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    return /((\w|\d)(.(\w|\d))?)+@((\w|\d)+([-]|[.])?)\.\w{2,5}$/.test(control.value)?
      {emailValidator: true} : null;
  }
}
