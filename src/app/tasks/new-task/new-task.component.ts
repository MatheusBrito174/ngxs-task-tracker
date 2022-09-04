import { dateValidator } from './../../validators/date.validator';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateGreaterThanValidator } from './../../validators/date-greater-than.validator';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @Output() formGroupCreated = new EventEmitter<FormGroup>();

  newTaskForm!: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.newTaskForm = this._formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(100)]],
      datetime: [
        '',
        [Validators.required, dateValidator, dateGreaterThanValidator],
      ],
      completed: [false],
    });

    this.formGroupCreated.emit(this.newTaskForm);
  }

  getMaxLengthErrorMessage(formControl: string): string {
    return `
      The field should not be more than
      ${
        this.newTaskForm.get(formControl)?.getError('maxlength')?.requiredLength
      }
      characters long.
    `;
  }
}
