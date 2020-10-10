import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getUser(id: string): any{
    return this.http.get(this.API_URL + 'users/${id}');
  }

  updateUser(id: string, updateUser: User): Observable<User>{
    return this.http.put(this.API_URL + 'users/${id}', updateUser);
  }

}
