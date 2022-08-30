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
import { TaskListViewComponent } from './task-list-view/task-list-view.component';

@NgModule({
  declarations: [
    TaskComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskListViewComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CustomFormsModule,
    GeneralModule,
    NgxsModule.forFeature([TaskState]),
  ],
  exports: [
    TaskComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskListViewComponent,
  ],
})
export class TasksModule {}
