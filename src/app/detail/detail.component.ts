import {Component, OnInit, Input} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() user: User;
}
