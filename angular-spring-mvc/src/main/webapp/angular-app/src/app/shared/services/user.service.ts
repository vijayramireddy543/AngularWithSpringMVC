import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;

    constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:9090/users';
    }

    public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }

    public save(user: User) {
      return this.http.post<User>(this.usersUrl, user);
    }

}
