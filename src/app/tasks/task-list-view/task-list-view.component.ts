import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, subscribeOn } from 'rxjs';
import { TaskActions } from 'src/app/actions/task.actions';
import { Task, Tasks } from 'src/app/models/task';
import { TaskState } from './../../states/task.state';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  @Select(TaskState.tasks) tasks$!: Observable<Tasks>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new TaskActions.FetchAll());
  }

  removeTask(task: Task): void {
    this.store.dispatch(new TaskActions.Remove(task.id));
  }

  markTaskAsCompleted(task: Task): void {
    const updatedTask = {
      ...task,
      completed: !task.completed,
    };

    this.store.dispatch(new TaskActions.Edit(updatedTask));
  }
}
