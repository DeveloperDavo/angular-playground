import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.users;
  }

}
