import {UserService} from "./user.service";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

export class UserServiceFake implements UserService {
  http: HttpClient;

  private users: User[];

  getUsers(): Promise<User[]> {
    return new Promise(res => res(this.users));
  }

  setUsersForTest(users: User[]) {
    this.users = users;
  }

}
