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
  @Output() removeTaskButtonClicked = new EventEmitter<string>();

  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  emitRemoveTaskButtonClicked(): void {
    this.removeTaskButtonClicked.emit(this.task.id);
  }
}
