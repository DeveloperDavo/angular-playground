import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User;
  detailForm: FormGroup;

  constructor(private fBuilder: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userService.getUsersPromise()
        .then(users => {
          const filteredUsers = users.filter(user => user.id === Number(params.get('id')));
          this.user = filteredUsers[0];
        });
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
