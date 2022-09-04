import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, Tasks } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks!: Tasks;
  @Output() removeTaskButtonClicked = new EventEmitter<Task>();
  @Output() taskDblClicked = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  emitRemoveTaskButtonClicked(task: Task): void {
    this.removeTaskButtonClicked.emit(task);
  }

  emitTaskDblClicked(task: Task): void {
    this.taskDblClicked.emit(task);
  }
}
