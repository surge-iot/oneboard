import { Component, OnInit, Input } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';

@Component({
  selector: '[app-equipment-node]',
  templateUrl: './equipment-node.component.html',
  styleUrls: ['./equipment-node.component.css']
})
export class EquipmentNodeComponent implements OnInit {
  @Input() node: Node;

  constructor() { }

  ngOnInit(): void {
  }

}
