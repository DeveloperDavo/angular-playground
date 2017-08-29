import {Injectable} from '@angular/core';
import {User} from "./user";

const USERS: User[] = [
  {id: 1, username: "david"},
  {id: 1, username: "chris"},
];

@Injectable()
export class UserService {
  users: User[] = USERS;
}
