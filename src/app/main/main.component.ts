import { Component, OnInit } from '@angular/core';

const USERS = [
  "David",
  "Chris",
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: string[] = USERS;

  constructor() { }

  ngOnInit() {
  }

  setUsers(users: string[]) {
    this.users = users;
  }
}
