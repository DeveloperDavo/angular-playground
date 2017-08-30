import {UserService} from "./user.service";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

export class UserServiceFake implements UserService {
  http: HttpClient;
  private users: User[];

  getUsers(): User[] {
    return this.users;
  }

  setUsersForTest(users: User[]) {
    this.users = users;
  }

}
