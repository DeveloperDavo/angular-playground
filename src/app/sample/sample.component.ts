import {Component, OnInit} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {Project} from "../project";

@Component({
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css', '../../../node_modules/dragula/dist/dragula.min.css']
})
export class SampleComponent implements OnInit {
  openProjects: Project[] = [
    {id: 5, description: 'o garfo'},
    {id: 6, description: 'o colher'},
    {id: 7, description: 'a faca'}];
  inProgressProjects: Project[] = [
    {id: 9, description: 'a coca'},
    {id: 10, description: 'a cerveja'},
    {id: 11, description: 'o suco'}];

  wasDropped = false;

  constructor(private dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.dragulaService.dropModel.subscribe(elements => {
      this.wasDropped = true;
      elements.forEach(element => console.log(element));
    });
  }
}
