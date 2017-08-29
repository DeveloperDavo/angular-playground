import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  users: User[] = MOCK_USERS;

  constructor(public http:Http) {
    console.log('Data service connected...');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }
}
