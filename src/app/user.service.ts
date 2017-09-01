import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUsers(): Promise<User[]> {
    return new Promise(res => {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(() => {
        res(MOCK_USERS);
      });
    });
  }

  setUsersForTest(users: User[]) {
    throw "This method should only be accessed from the UserServiceFake";
  }

}
