import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>(`${environment.apiUrl}/userList`);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
  }

  updateUser(user: User) {
    return this.http.put(`${environment.apiUrl}/updateUser`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`${environment.apiUrl}/deleteUser/${id}`);
  }
}
