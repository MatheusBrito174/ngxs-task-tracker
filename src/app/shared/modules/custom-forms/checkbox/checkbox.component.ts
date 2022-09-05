import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() checkboxId: string = '';
  @Input() label: string = '';

  onChange: Function = (value: boolean): void => {};
  onTouched: Function = (): void => {};

  checked: boolean = false;
  disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = (event: Event) => {
      const checkboxElement = event.target as HTMLInputElement;

      fn(checkboxElement.checked);
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
