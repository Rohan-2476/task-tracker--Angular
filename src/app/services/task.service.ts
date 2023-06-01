import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // For making http requests in angular [GET, POST, PUT, DELETE]
import { Observable, of } from 'rxjs';
import { Task } from '../Task'; //  Task interface

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'; // json-server => dummy-backend-API

  constructor(private http: HttpClient) {}

  // Observables keeps constantly watching it
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl); // GET querry: To get all tasks
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; // bcoz delete requires an id for the task-to-be-deleted

    return this.http.delete<Task>(url); // DELETE querry: To delete selected task with task.id
  }
}
