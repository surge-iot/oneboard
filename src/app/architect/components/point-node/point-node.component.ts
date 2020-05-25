import { Component, OnInit, Input } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';

@Component({
  selector: '[app-point-node]',
  templateUrl: './point-node.component.html',
  styleUrls: ['./point-node.component.css']
})
export class PointNodeComponent implements OnInit {
  @Input() node: Node;

  constructor() { }

  ngOnInit(): void {
  }

}
