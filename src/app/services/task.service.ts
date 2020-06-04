import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/** Models */
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { take,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = `${environment.api.url}/tasks`;

  constructor(private http: HttpClient) {}

  getTasksByUserId(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}/user/${userId}`);
  }

  createTask(data: any): Promise<any> {
    return this.http.post(this.baseURL, data).pipe(take(1)).toPromise();
  }

  updateTask(taskId: string, data: any): Promise<any> {
    return this.http.post(`${this.baseURL}/${taskId}`, data).pipe(take(1)).toPromise();
  }

  deleteTask(taskId: string): Promise<any> {
    return this.http.delete(`${this.baseURL}/${taskId}`).pipe(take(1)).toPromise();
  }
}
