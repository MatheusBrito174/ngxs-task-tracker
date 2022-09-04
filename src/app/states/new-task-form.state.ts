import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { NewTaskFormActions } from '../actions/new-task-form.actions';
import { NewTaskFormStateModel } from '../models/new-task-form.state.model';

@State<NewTaskFormStateModel>({
  name: 'newTaskForm',
  defaults: {
    showNewTaskForm: true,
  },
})
@Injectable({
  providedIn: 'root',
})
export class NewTaskFormState {
  @Selector()
  static showNewTaskForm(state: NewTaskFormStateModel) {
    return state.showNewTaskForm;
  }

  @Action(NewTaskFormActions.ToggleExibition)
  toggleExibition(ctx: StateContext<NewTaskFormStateModel>) {
    const state = ctx.getState();

    ctx.patchState({
      showNewTaskForm: !state.showNewTaskForm,
    });
  }
}
