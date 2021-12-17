import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User as UserModel } from '@cv-maker/api-interfaces';

const baseUrl = '/api/users';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(baseUrl);
  }

  getOne(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${baseUrl}/${id}`);
  }

  getCurrent(): Observable<UserModel> {
    return this.http.get<UserModel>(`/api/profile`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
