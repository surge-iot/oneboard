import { Component, OnInit } from '@angular/core';
export interface Node {
  id: string;
  label: string;
}

export interface Link {
  id: string;
  source: string;
  target: string;
}
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor() { }
  nodes:Node[];
  links:Link[];
  ngOnInit(): void {
  }

}
