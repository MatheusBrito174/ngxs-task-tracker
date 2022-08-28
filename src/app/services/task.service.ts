import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  addTask(task: Task): Observable<Object> {
    return this.http.post(`${this.apiBaseUrl}/tasks`, task);
  }

  fetchAllTasks(): Observable<Object> {
    return this.http.get(`${this.apiBaseUrl}/tasks`);
  }

  updateTask(task: Task): Observable<Object> {
    return this.http.put(`${this.apiBaseUrl}/tasks/${task.id}`, task);
  }

  removeTask(id: string): Observable<Object> {
    return this.http.delete(`${this.apiBaseUrl}/tasks/${id}`);
  }
}
