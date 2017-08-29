import {Injectable} from '@angular/core';
import {User} from "./user";
import {MOCK_USERS} from "./mock-users";

@Injectable()
export class UserService {
  users: User[] = MOCK_USERS;
}
