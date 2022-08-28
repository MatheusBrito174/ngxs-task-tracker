import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TaskActions } from '../actions/task.actions';
import { TaskStateModel } from '../models/task.state.model';
import { TaskService } from '../services/task.service';

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: [],
  },
})
@Injectable({
  providedIn: 'root',
})
export class TaskState {
  constructor(private readonly taskService: TaskService) {}

  @Selector()
  static tasks(state: TaskStateModel) {
    return state.tasks;
  }

  @Action(TaskActions.FetchAll)
  fetchAll(ctx: StateContext<TaskStateModel>) {
    this.taskService.fetchAllTasks().subscribe((r) => console.log(r));
  }
}
