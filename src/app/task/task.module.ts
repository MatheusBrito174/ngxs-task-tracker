import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TaskComponent } from './task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorMsgComponent } from '../components/validation-error-msg/validation-error-msg.component';

@NgModule({
  declarations: [
    TaskComponent,
    NewTaskComponent,
    TaskListComponent,
    ValidationErrorMsgComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [TaskComponent, NewTaskComponent, TaskListComponent],
})
export class TaskModule {}
