import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsersPromise()
      .then(users => this.users = users)
      .catch(() => {
        throw new Error('Error');
      });
  }

  onRowClick(user: User): void {
    const relativeUrl = `/detail/${user.id}`;
    this.router.navigateByUrl(relativeUrl);
  }

  onDelete(userToDelete: User, event: Event): void {
    this.users = this.users.filter(user => user !== userToDelete);
  }

}
