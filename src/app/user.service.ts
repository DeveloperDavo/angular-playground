import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(public http: HttpClient) {}

  getUsers(): User[] {
    this.http
      .get('/data')
      .subscribe();

    return MOCK_USERS;
  }

  setUsersForTest(users: User[]) {
    // TODO: throw "This method should only be used for testing purposes"
  }

}
