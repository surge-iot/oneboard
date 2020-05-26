import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';

@Component({
  selector: '[app-point-node]',
  templateUrl: './point-node.component.html',
  styleUrls: ['./point-node.component.css']
})
export class PointNodeComponent implements OnInit {
  @Input() node: Node;
  @Input() mode: string;

  @Output() onEntryConnectorClick = new EventEmitter<Node>();
  @Output() onExitConnectorClick = new EventEmitter<Node>();
  constructor() { }

  ngOnInit(): void {
  }

}
