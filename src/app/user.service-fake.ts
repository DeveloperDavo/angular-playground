import {UserService} from "./user.service";
import {User} from "./user";

export class UserServiceFake implements UserService {

  private users: User[];

  getUsers(): User[] {
    return this.users;
  }

  setUsersForTest(users: User[]) {
    this.users = users;
  }

}
