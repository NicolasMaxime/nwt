import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export class CustomValidator{
  static passValidator(form: FormGroup): ValidationErrors | null {
    let pass = form.get('password');
    let verifPass = form.get('verifPassword');
    return pass === verifPass ? {passValidator: true} : null;
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    return /((\w|\d)(.(\w|\d))?)+@((\w|\d)+([-]|[.])?)\.\w{2,5}$/
  }
}
