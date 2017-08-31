import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {MOCK_USERS} from "./mock-users";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
  users: User[];

  constructor(public http: HttpClient) {

  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe();
    return MOCK_USERS;
  }

  setUsersForTest(users: User[]) {
    // TODO: throw "This method should only be used for testing purposes"
  }

}
