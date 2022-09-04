import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks!: Tasks;
  @Output() removeTaskButtonClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitRemoveTaskButtonClicked(taskId: string): void {
    this.removeTaskButtonClicked.emit(taskId);
  }
}
