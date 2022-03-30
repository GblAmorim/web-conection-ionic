import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public createUser(user: IUser): any {
    return this.http.post(environment.baseUrl + '/createUser', user);
  }

  public getAllUsers(): any {
    return this.http.get(environment.baseUrl + '/getAllUsers');
  }

  public getUserById(id: string): any {
    return this.http.get(environment.baseUrl + '/getUserById?id=' + id);
  }

  public updateUser(user: IUser): any {
    return this.http.post(environment.baseUrl + '/updateUser', { user });
  }

  public deleteUser(id: string): any {
    return this.http.post(environment.baseUrl + '/deleteUser', id);
  }
}
