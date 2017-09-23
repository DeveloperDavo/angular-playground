import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsersPromise()
      .then(users => this.users = users)
      .catch(() => {
        throw new Error('Error');
      });
  }

  onDelete(userToDelete: User, event: Event): void {
    this.users = this.users.filter(user => user !== userToDelete);
  }

  onAdd(): void {
    this.users.push(new User(-1, ''));
  }
}
