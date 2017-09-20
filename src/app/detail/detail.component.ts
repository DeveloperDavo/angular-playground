import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import {UserService} from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User;
  detailForm: FormGroup;

  constructor(private fBuilder: FormBuilder,
              private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {
    this.userService.getUserPromise()
      .then(users => this.user = users[0])
      .catch(() => {
        throw new Error('Error');
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
