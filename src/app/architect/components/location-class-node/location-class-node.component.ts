import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';

@Component({
  selector: '[app-location-class-node]',
  templateUrl: './location-class-node.component.html',
  styleUrls: ['./location-class-node.component.css', '../hierarchy/hierarchy.component.css']
})
export class LocationClassNodeComponent implements OnInit {
  @Input() node: Node;
  constructor(

    ) { }

  ngOnInit(): void {
  }

}
