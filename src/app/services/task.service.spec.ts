import { AddTaskPayload } from './../models/add-task-payload.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Task, Tasks } from '../models/task';
import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Subject, takeUntil } from 'rxjs';

describe('TaskService', () => {
  const apiBaseUrl = environment.apiBaseUrl;

  let testEnded$: Subject<boolean>;

  let service: TaskService;
  let controller: HttpTestingController;

  beforeEach(() => {
    testEnded$ = new Subject<boolean>();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TaskService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    testEnded$.next(true);
    testEnded$.complete();

    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${TaskService.prototype.addTask.name} should make a post request to the correct url and return the new task`, (done: DoneFn) => {
    const addTaskPayload: AddTaskPayload = {
      description: 'test',
      datetime: new Date('2022-09-11T00:02:18.502Z'),
      completed: false,
    };

    const expectedTask: Task = {
      id: '1',
      ...addTaskPayload,
    };

    service
      .addTask(addTaskPayload)
      .pipe(takeUntil(testEnded$))
      .subscribe({
        next: (task: Task) => {
          expect(task).withContext('Task returned').toEqual(expectedTask);

          done();
        },
        error: done.fail,
      });

    const testReq = controller.expectOne((request: HttpRequest<any>) => {
      return (
        request.url === `${apiBaseUrl}/tasks` && request.body == addTaskPayload
      );
    });

    expect(testReq.request.method).withContext('Http method').toBe('POST');

    testReq.flush(expectedTask);
  });

  it(`#${TaskService.prototype.fetchAllTasks.name} should make a get request to the correct url and return all tasks`, (done: DoneFn) => {
    const existingTasks = [
      {
        id: '1',
        description: 'test',
        datetime: new Date('2022-09-11T00:02:18.502Z'),
        completed: false,
      },
      {
        id: '2',
        description: 'test 2',
        datetime: new Date('2022-09-12T00:02:18.502Z'),
        completed: true,
      },
    ];

    service
      .fetchAllTasks()
      .pipe(takeUntil(testEnded$))
      .subscribe({
        next: (tasks: Tasks) => {
          expect(tasks).withContext('Tasks returned').toEqual(existingTasks);
          done();
        },
        error: done.fail,
      });

    const testReq = controller.expectOne(`${apiBaseUrl}/tasks`);

    expect(testReq.request.method).withContext('Http method').toBe('GET');

    testReq.flush(existingTasks);
  });

  it(`#${TaskService.prototype.updateTask.name} should make a put request to the correct url and return the updated task`, (done: DoneFn) => {
    const expectedTask = {
      id: '1',
      description: 'update test',
      datetime: new Date('2022-09-11T00:02:18.502Z'),
      completed: false,
    };

    service
      .updateTask(expectedTask)
      .pipe(takeUntil(testEnded$))
      .subscribe({
        next: (task) => {
          expect(task).toEqual(expectedTask);
          done();
        },
        error: done.fail,
      });

    const testReq = controller.expectOne((request: HttpRequest<any>) => {
      return (
        request.url === `${apiBaseUrl}/tasks/${expectedTask.id}` &&
        request.body == expectedTask
      );
    });

    expect(testReq.request.method).toBe('PUT');

    testReq.flush(expectedTask);
  });

  it(`#${TaskService.prototype.removeTask.name} should make a delete request to the correct url`, (done: DoneFn) => {
    const taskId = '1';

    service
      .removeTask(taskId)
      .pipe(takeUntil(testEnded$))
      .subscribe({
        next: () => done(),
        error: done.fail,
      });

    const testReq = controller.expectOne(`${apiBaseUrl}/tasks/${taskId}`);

    expect(testReq.request.method).toBe('DELETE');

    testReq.flush({});
  });
});
