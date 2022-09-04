import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DateTime } from 'luxon';

export const dateValidator: ValidatorFn = (
  formControl: AbstractControl
): ValidationErrors | null => {
  const control = DateTime.fromISO(formControl.value);

  if (control.isValid) {
    return null;
  }

  return {
    date: true,
  };
};
