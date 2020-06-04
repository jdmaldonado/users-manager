import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/** Models */
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { take,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = `${environment.api.url}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  createUser(data: any): Promise<any> {
    return this.http.post(this.baseURL, data).pipe(take(1)).toPromise();
  }

  updateUser(userId: string, data: any): Promise<any> {
    return this.http.post(`${this.baseURL}/${userId}`, data).pipe(take(1)).toPromise();
  }

  deleteUser(userId: string): Promise<any> {
    return this.http.delete(`${this.baseURL}/${userId}`).pipe(take(1)).toPromise();
  }
}
