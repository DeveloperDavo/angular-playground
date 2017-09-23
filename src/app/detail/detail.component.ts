import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User;
  id: number;
  detailForm: FormGroup;

  constructor(private fBuilder: FormBuilder, private userService: UserService) {
    this.createForm();
    this.id = 5;
  }

  ngOnInit(): void {
    this.userService.getUsersPromise()
      .then(users => {
        const filteredUsers = users.filter(user => user.id === this.id);
        this.user = filteredUsers[0];
      });
  }

  createForm() {
    this.detailForm = this.fBuilder.group({
      name: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: this.fBuilder.group({
        street: new FormControl(),
        city: new FormControl(),
        zipcode: new FormControl()
      })
    });
  }

}
