import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function futureDateValidator(): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
      const enteredDate = control.value;
      const currentDate = new Date();

      if (enteredDate && new Date(enteredDate) <= currentDate) {
         return { futureDate: true };
      }

      return null;
   };
}