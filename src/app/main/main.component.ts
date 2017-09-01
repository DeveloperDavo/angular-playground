import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => this.users = users)
      .catch(() => {
        throw "Error"
      });
  }

  getUsersForTest(): User[] {
    return this.users;
  }

  setUsersForTest(users: User[]) {
    this.users = users;
  }

}
