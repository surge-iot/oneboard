import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/utils/components/confirm-dialog/confirm-dialog.component';
import { LocationService } from 'src/app/location/location.service';

@Component({
  selector: '[app-location-node]',
  templateUrl: './location-node.component.html',
  styleUrls: ['./location-node.component.css']
})
export class LocationNodeComponent implements OnInit {
  @Input() node: Node;
  @Input() mode: string;
  @Output() updated = new EventEmitter();
  @Output() onEntryConnectorClick = new EventEmitter<Node>();
  @Output() onExitConnectorClick = new EventEmitter<Node>();
  selectedElement;
  constructor(
    public dialog: MatDialog,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
  }

  async delete(node:Node): Promise<void> {
    console.log('Delete ', node.modelId);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: "Are you sure you want to delete this?"
    });

    const confirmed = await dialogRef.afterClosed().toPromise();
    if(!confirmed){
      return;
    }
    const deleted = await this.locationService.delete(+node.modelId).toPromise();
    if(deleted){
      this.updated.emit();
    }
  }


}
