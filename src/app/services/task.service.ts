import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, Tasks } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiBaseUrl}/tasks`, task);
  }

  fetchAllTasks(): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.apiBaseUrl}/tasks`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiBaseUrl}/tasks/${task.id}`, task);
  }

  removeTask(id: string): Observable<Object> {
    return this.http.delete(`${this.apiBaseUrl}/tasks/${id}`);
  }
}
