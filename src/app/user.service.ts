import {Injectable} from '@angular/core';

const USERS = [
  "David",
  "Chris",
];

@Injectable()
export class UserService {
  users: string[] = USERS;
}
