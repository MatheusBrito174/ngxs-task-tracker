import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { TaskActions } from 'src/app/actions/task.actions';
import { AddTaskPayload } from './../../models/add-task-payload.model';
import { NewTaskFormState } from './../../states/new-task-form.state';

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
    private readonly store: Store,
    private readonly toastrService: ToastrService
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

    const addTaskPayload = this.newTaskViewForm.value.newTask as AddTaskPayload;

    this.subscription.add(
      this.store.dispatch(new TaskActions.Add(addTaskPayload)).subscribe(() => {
        this.newTaskViewForm.reset();
        this.toastrService.success('Task added.');
      })
    );
  }
}
