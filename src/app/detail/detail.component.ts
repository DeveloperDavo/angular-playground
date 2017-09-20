import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import {UserService} from '../user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
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

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userService.getUserPromise()
        .then(users => this.user = users[params.get('id')])
        .catch(() => {
          throw new Error('Error');
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
