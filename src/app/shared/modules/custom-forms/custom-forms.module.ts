import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorMsgComponent } from './validation-error-msg/validation-error-msg.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValidationErrorMsgComponent, CheckboxComponent],
  imports: [CommonModule],
  exports: [
    ValidationErrorMsgComponent,
    CheckboxComponent,
    ReactiveFormsModule,
  ],
})
export class CustomFormsModule {}
