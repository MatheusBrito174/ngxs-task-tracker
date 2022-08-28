import { dateGreaterThanValidator } from './../../validators/date-greater-than.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this._formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(100)]],
      datetime: ['', [Validators.required, dateGreaterThanValidator]],
      completed: [false],
    });
  }

  addTask() {
    console.log('AddTask');
  }

  getMaxLengthErrorMessage(formControl: string): string {
    return `
      The field should not be more than
      ${this.taskForm.get(formControl)?.getError('maxlength')?.requiredLength}
      characters long.
    `;
  }
}
