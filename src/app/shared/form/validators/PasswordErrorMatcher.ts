import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class PasswordErrorMatcher implements ErrorStateMatcher{
  /**
   * Error Matcher to verify FormGroup {password && verifPassword}
   * @param control
   * @param form
   */
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidControl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidControl || invalidParent);
  }

}
