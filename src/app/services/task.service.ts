import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Task, Tasks } from '../models/task';
import { AddTaskPayload } from '../models/add-task-payload.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  addTask(addTaskPayload: AddTaskPayload): Observable<Task> {
    return this.http
      .post<Task>(`${this.apiBaseUrl}/tasks`, addTaskPayload)
      .pipe(catchError(this.handleError));
  }

  fetchAllTasks(): Observable<Tasks> {
    return this.http
      .get<Tasks>(`${this.apiBaseUrl}/tasks`)
      .pipe(catchError(this.handleError));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http
      .put<Task>(`${this.apiBaseUrl}/tasks/${task.id}`, task)
      .pipe(catchError(this.handleError));
  }

  removeTask(id: string): Observable<{}> {
    return this.http
      .delete(`${this.apiBaseUrl}/tasks/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(
      () => new Error('An error ocurred. Please try again later.')
    );
  }
}
