import {UserService} from "./user.service";
import {User} from "./user";

export class UserServiceFake implements UserService {

  private users: User[];

  getUsers(): Promise<User[]> {
    return new Promise(res => res(this.users));
  }

  setUsersForTest(users: User[]) {
    this.users = users;
  }

}
