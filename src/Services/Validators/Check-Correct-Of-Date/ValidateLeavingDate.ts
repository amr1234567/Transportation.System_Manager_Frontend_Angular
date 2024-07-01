import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function arrivalAfterLeavingValidator(): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
      const arrivalTimeString = control.get('ArrivalTime')?.value as string;
      const leavingTimeString = control.get('LeavingTime')?.value as string;

      if (arrivalTimeString && leavingTimeString) {
         const arrivalTime = new Date(arrivalTimeString);
         const leavingTime = new Date(leavingTimeString);

         // Check if both arrivalTime and leavingTime are valid Date objects
         if (!isNaN(arrivalTime.getTime()) && !isNaN(leavingTime.getTime()) && arrivalTime < leavingTime) {
            return { arrivalAfterLeaving: true };
         }
      }

      return null;
   };
}