import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks!: Tasks;

  constructor() {}

  ngOnInit(): void {}
}
