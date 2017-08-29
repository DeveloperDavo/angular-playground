import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";

@Injectable()
export class UserService {
  getUsers(): User[] {
    return MOCK_USERS;
  }

}
