import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() removeTaskButtonClicked = new EventEmitter<Task>();
  @Output() taskDblClicked = new EventEmitter<Task>();

  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  emitRemoveTaskButtonClicked(): void {
    this.removeTaskButtonClicked.emit(this.task);
  }

  emitTaskDblClicked(): void {
    this.taskDblClicked.emit(this.task);
  }
}
