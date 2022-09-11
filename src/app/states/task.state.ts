import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, take, tap } from 'rxjs';
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
  add(
    ctx: StateContext<TaskStateModel>,
    action: TaskActions.Add
  ): Observable<Task> {
    const { addTaskPayload } = action;
    const state = ctx.getState();

    return this.taskService.addTask(addTaskPayload).pipe(
      take(1),
      tap((newTask: Task) =>
        ctx.patchState({ tasks: [...state.tasks, newTask] })
      )
    );
  }

  @Action(TaskActions.Edit)
  edit(
    ctx: StateContext<TaskStateModel>,
    action: TaskActions.Edit
  ): Observable<Task> {
    const state = ctx.getState();
    const { task } = action;

    return this.taskService.updateTask(task).pipe(
      take(1),
      tap((updatedTask: Task) => {
        ctx.patchState({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        });
      })
    );
  }

  @Action(TaskActions.Remove)
  remove(
    ctx: StateContext<TaskStateModel>,
    action: TaskActions.Remove
  ): Observable<{}> {
    const state = ctx.getState();
    const { taskId } = action;

    return this.taskService.removeTask(taskId).pipe(
      take(1),
      tap(() => {
        ctx.patchState({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        });
      })
    );
  }

  @Action(TaskActions.FetchAll)
  fetchAll(ctx: StateContext<TaskStateModel>): Observable<Tasks> {
    return this.taskService.fetchAllTasks().pipe(
      take(1),
      tap((tasks: Tasks) => ctx.setState({ tasks }))
    );
  }
}
