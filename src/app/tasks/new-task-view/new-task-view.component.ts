import { NewTaskFormState } from './../../states/new-task-form.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Subscription, Observable } from 'rxjs';
import { TaskActions } from 'src/app/actions/task.actions';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-new-task-view',
  templateUrl: './new-task-view.component.html',
  styleUrls: ['./new-task-view.component.css'],
})
export class NewTaskViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  @Select(NewTaskFormState.showNewTaskForm)
  showNewTaskForm$!: Observable<boolean>;

  newTaskViewForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.newTaskViewForm = this.formBuilder.group({});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addFormGroup(formGroupName: string, newFormGroup: FormGroup) {
    this.newTaskViewForm.addControl(formGroupName, newFormGroup);
  }

  createNewTask() {
    if (this.newTaskViewForm.invalid) {
      this.newTaskViewForm.markAllAsTouched();

      return;
    }

    const newTask: Task = this.newTaskViewForm.value.newTask;

    this.subscription.add(
      this.store.dispatch(new TaskActions.Add(newTask)).subscribe(() => {
        this.newTaskViewForm.reset();
      })
    );
  }
}
