import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<object> {
    return this.http.get(environment.apiUrl + '/users').pipe(
      retry(1),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }

  addUser(user: any): Observable<object> {
    return this.http.post(`${this.apiUrl}/add`, user).pipe(
      retry(1),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }

  editUser(id: string, user: any): Observable<object> {
    return this.http.put(`${this.apiUrl}/${id}`, user).pipe(
      retry(1),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }

  deleteUser(id: string): Observable<object> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      retry(1),
      catchError((error) => {
        return throwError(error.message);
      })
    );
  }
}
