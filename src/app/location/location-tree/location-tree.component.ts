import { Component, OnInit, Input } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Location, LocationService } from '../location.service'

/**
 * Flattened tree node that has been created from a Location through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  id: number,
  name: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-location-tree',
  templateUrl: './location-tree.component.html',
  styleUrls: ['./location-tree.component.css']
})
export class LocationTreeComponent  {
  @Input()
  linkRelativeTo: string

  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: FlatTreeNode) => node.expandable;

  constructor(private locationService: LocationService) {
    this.locationService.getRootLocations().subscribe(res => {
      this.dataSource.data = res;
    })
  }
  ngOnInit() {

  }

  /** Transform the data to something the tree can read. */
  private _transformer(node: Location, level: number) {
    console.log(node, !!node.children)
    return {
      id: node.id,
      name: node.name,
      level: level,
      expandable: !!node.children
    };
  }
}
