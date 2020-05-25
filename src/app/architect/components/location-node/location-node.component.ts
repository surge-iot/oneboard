import { Component, OnInit, Input } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';

@Component({
  selector: '[app-location-node]',
  templateUrl: './location-node.component.html',
  styleUrls: ['./location-node.component.css']
})
export class LocationNodeComponent implements OnInit {
  @Input() node: Node;
  constructor() { }

  ngOnInit(): void {
    console.log(this.node)
  }

}
