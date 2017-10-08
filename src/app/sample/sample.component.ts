import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css', '../../../node_modules/dragula/dist/dragula.min.css']
})
export class SampleComponent implements OnInit {
  talheres: String[] = ['o garfo', 'o colher', 'a faca'];
  bebidas: String[] = ['a coca', 'a cerveja', 'a caiparinha'];

  constructor() { }

  ngOnInit() {
  }

}
