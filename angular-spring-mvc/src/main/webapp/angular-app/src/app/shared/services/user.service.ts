import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;
  private userSaveUrl: string;

    constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:9090/users';
      this.userSaveUrl = 'http://localhost:9090/saveUser';
    }

    public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }

    public save(user: User) {
      console.log("User data is "+user.id);
      return this.http.post<User>(this.userSaveUrl, user);
    }

}
