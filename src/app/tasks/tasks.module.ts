import { TaskState } from './../states/task.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CustomFormsModule } from '../shared/modules/custom-forms/custom-forms.module';
import { GeneralModule } from '../shared/modules/general/general.module';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [TaskComponent, NewTaskComponent, TaskListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CustomFormsModule,
    GeneralModule,
    NgxsModule.forFeature([TaskState]),
  ],
  exports: [TaskComponent, NewTaskComponent, TaskListComponent],
})
export class TasksModule {}
