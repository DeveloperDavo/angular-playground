import {Component, Input} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() user: User;
  detailForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });
}
