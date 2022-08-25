import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
