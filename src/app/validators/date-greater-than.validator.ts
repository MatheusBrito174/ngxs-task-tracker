import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateGreaterThanValidator: ValidatorFn = (
  formControl: AbstractControl,
  minDate: Date = new Date()
): ValidationErrors | null => {
  const control = new Date(formControl.value);

  if (control > minDate) {
    return null;
  }

  return {
    minDate: true,
  };
};
