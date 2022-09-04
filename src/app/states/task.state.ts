import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TaskActions } from '../actions/task.actions';
import { Tasks } from '../models/task';
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

  @Action(TaskActions.Add)
  add(ctx: StateContext<TaskStateModel>, action: TaskActions.Add) {
    const { task } = action;
    const state = ctx.getState();
    this.taskService
      .addTask(task)
      .subscribe((newTask) =>
        ctx.patchState({ tasks: [...state.tasks, newTask] })
      );
  }

  @Action(TaskActions.Remove)
  remove(ctx: StateContext<TaskStateModel>, action: TaskActions.Remove) {
    const state = ctx.getState();
    const { taskId } = action;

    this.taskService.removeTask(taskId).subscribe(() => {
      ctx.patchState({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      });
    });
  }

  @Action(TaskActions.FetchAll)
  fetchAll(ctx: StateContext<TaskStateModel>) {
    this.taskService
      .fetchAllTasks()
      .subscribe((tasks) => ctx.setState({ tasks }));
  }
}
