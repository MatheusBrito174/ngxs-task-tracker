import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TaskComponent } from './task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskComponent, NewTaskComponent, TaskListComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TaskComponent, NewTaskComponent, TaskListComponent],
})
export class TaskModule {}
