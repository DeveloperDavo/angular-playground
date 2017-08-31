import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {MOCK_USERS} from "./mock-users";

@Injectable()
export class UserService {
  constructor(public http: HttpClient) {

  }

  getUsers(): Promise<User[]> {
    return new Promise(res => {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(users => {
        res(users);
      });
    });
  }

  setUsersForTest(users: User[]) {
    // TODO: throw "This method should only be used for testing purposes"
  }

}
