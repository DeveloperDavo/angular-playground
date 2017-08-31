import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";

@Injectable()
export class UserService {

  getUsers(): Promise<User[]> {
    return new Promise(res => res(MOCK_USERS));
  }

  setUsersForTest(users: User[]) {
    // TODO: throw "This method should only be used for testing purposes"
  }

}
