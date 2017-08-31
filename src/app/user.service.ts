import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUsers(): Promise<User[]> {
    return new Promise(() => {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe();
    });
  }

  setUsersForTest(users: User[]) {
    // TODO: throw "This method should only be used for testing purposes"
  }

}
