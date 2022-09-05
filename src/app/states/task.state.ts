import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TaskActions } from '../actions/task.actions';
import { Task, Tasks } from '../models/task';
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
  static tasks(state: TaskStateModel): Tasks {
    return state.tasks;
  }

  @Action(TaskActions.Add)
  add(ctx: StateContext<TaskStateModel>, action: TaskActions.Add) {
    const { task } = action;
    const state = ctx.getState();
    this.taskService
      .addTask(task)
      .subscribe((newTask: Task) =>
        ctx.patchState({ tasks: [...state.tasks, newTask] })
      );
  }

  @Action(TaskActions.Edit)
  edit(ctx: StateContext<TaskStateModel>, action: TaskActions.Edit) {
    const state = ctx.getState();
    const { task } = action;

    this.taskService.updateTask(task).subscribe((updatedTask: Task) => {
      ctx.patchState({
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      });
    });
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
      .subscribe((tasks: Tasks) => ctx.setState({ tasks }));
  }
}
