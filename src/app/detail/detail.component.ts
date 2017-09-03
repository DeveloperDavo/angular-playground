import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  user: User = {id: 0, name: 'Baz Bar', username: 'bazbar', email: 'bazbar@gmail.com', phone: '894'};
}
