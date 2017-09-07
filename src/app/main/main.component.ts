import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserPromise()
      .then(users => this.users = users)
      .catch(() => {
        throw new Error('Error');
      });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
