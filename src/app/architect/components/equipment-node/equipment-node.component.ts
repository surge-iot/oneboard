import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';

@Component({
  selector: '[app-equipment-node]',
  templateUrl: './equipment-node.component.html',
  styleUrls: ['./equipment-node.component.css']
})
export class EquipmentNodeComponent implements OnInit {
  @Input() node: Node;
  @Input() mode: string;

  @Output() onEntryConnectorClick = new EventEmitter<Node>();
  @Output() onExitConnectorClick = new EventEmitter<Node>();
  constructor() { }

  ngOnInit(): void {
  }

}
