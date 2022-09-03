import { NewTaskComponent } from './../new-task/new-task.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-task-view',
  templateUrl: './new-task-view.component.html',
  styleUrls: ['./new-task-view.component.css'],
})
export class NewTaskViewComponent implements OnInit {
  newTaskForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.newTaskForm = this.formBuilder.group({
      newTask: [{}],
    });
  }

  createNewTask(e: any) {}
}
