import { dateGreaterThanValidator } from './../../validators/date-greater-than.validator';
import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NewTaskComponent),
    },
  ],
})
export class NewTaskComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  subscription: Subscription = new Subscription();

  taskForm!: FormGroup;

  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this._formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(100)]],
      datetime: ['', [Validators.required, dateGreaterThanValidator]],
      completed: [false],
    });

    this.subscription.add(
      this.taskForm.valueChanges.subscribe(() => {
        this.onChange(this.taskForm.value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMaxLengthErrorMessage(formControl: string): string {
    return `
      The field should not be more than
      ${this.taskForm.get(formControl)?.getError('maxlength')?.requiredLength}
      characters long.
    `;
  }

  writeValue(obj: any): void {
    this.taskForm.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.taskForm.disable();
  }
}
