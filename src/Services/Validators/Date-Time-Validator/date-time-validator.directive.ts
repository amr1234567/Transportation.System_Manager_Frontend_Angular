import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateTimeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateTimeValidatorDirective,
      multi: true
    }
  ]
})
export class DateTimeValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const date: Date = control.value as Date;

    // Check if the control value is a valid date
    if (!date || isNaN(date.getTime())) {
      return { invalidDate: true };
    }

    // Compare with the current date
    if (date < new Date()) {
      return { pastDate: true };
    }

    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
