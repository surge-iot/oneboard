import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';

interface GenericModel {
  id;
  name: string;
  children: GenericModel[];
}
/**
 * Flattened tree node that has been created from a Generic through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export class DynamicFlatNode {
  constructor(public id: number, public name: string, public level: number = 1, public expandable: boolean = false,
    public isLoading: boolean = false) { }
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable()
export class DynamicDatabase {
  rootLevelNodes: GenericModel[];
  constructor(private service) {
    this.service.findRoots().subscribe(res => {
      this.rootLevelNodes = res;
    })
  }
  /** Initial data from database */
  async initialData(): Promise<DynamicFlatNode[]> {
    this.rootLevelNodes = await this.service.findRoots().toPromise();
    return this.rootLevelNodes.map(generic => new DynamicFlatNode(generic.id, generic.name, 0, generic.children.length !== 0));
  }

  findChildren(id: number): Observable<GenericModel[] | undefined> {
    return this.service.findChildren(id);
  }

  isExpandable(node: GenericModel): boolean {
    return node.children.length !== 0;
  }
}


@Injectable()
export class DynamicDataSource {

  dataChange: BehaviorSubject<DynamicFlatNode[]> = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase) { }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.changed!.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach((node) => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.reverse().forEach((node) => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  async toggleNode(node: DynamicFlatNode, expand: boolean) {
    node.isLoading = true;
    const children = await this.database.findChildren(node.id).toPromise();
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    if (expand) {
      const nodes = children.map(generic =>
        new DynamicFlatNode(generic.id, generic.name, node.level + 1, this.database.isExpandable(generic)));
      this.data.splice(index + 1, 0, ...nodes);
    } else {
      this.data.splice(index + 1, children.length);
    }

    // notify the change
    this.dataChange.next(this.data);
    node.isLoading = false;
  }
}




@Component({
  selector: 'app-generic-tree',
  templateUrl: './generic-tree.component.html',
  styleUrls: ['./generic-tree.component.css'],
  providers: [DynamicDatabase]
})
export class GenericTreeComponent {
  @Input()
  linkRelativeTo: string

  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    database.initialData().then(initialData => { this.dataSource.data = initialData });
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => { return node.level; };

  isExpandable = (node: DynamicFlatNode) => { return node.expandable; };

  hasChild = (_: number, _nodeData: DynamicFlatNode) => { return _nodeData.expandable; };
}
