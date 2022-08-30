import { Observable } from 'rxjs';
import { TaskState } from './../../states/task.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Tasks } from 'src/app/models/task';
import { TaskActions } from 'src/app/actions/task.actions';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  @Select(TaskState.tasks) tasks$!: Observable<Tasks>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new TaskActions.FetchAll());
  }
}
