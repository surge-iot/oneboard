import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/utils/components/confirm-dialog/confirm-dialog.component';
import { LocationService } from 'src/app/location/location.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateEquipmentComponent } from 'src/app/equipment/components/create-equipment/create-equipment.component';
import { CreatePointComponent } from 'src/app/point/components/create-point/create-point.component';

@Component({
  selector: '[app-location-node]',
  templateUrl: './location-node.component.html',
  styleUrls: ['./location-node.component.css', '../hierarchy/hierarchy.component.css']
})
export class LocationNodeComponent implements OnInit {
  @Input() node: Node;
  @Input() mode: string;
  @Output() updated = new EventEmitter();
  @Output() onEntryConnectorClick = new EventEmitter<Node>();
  @Output() onExitConnectorClick = new EventEmitter<Node>();
  constructor(
    public dialog: MatDialog,
    private locationService: LocationService,
    private _bottomSheet: MatBottomSheet,
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

  async createEquipment() {
    const bottomSheetRef = this._bottomSheet.open(CreateEquipmentComponent,{
      data: { locationId: this.node.modelId },
    });
    const createdEquipment = await bottomSheetRef.afterDismissed().toPromise();
    if (!createdEquipment) {
      return;
    }
    this.updated.emit();
  }
  async createPoint() {
    const bottomSheetRef = this._bottomSheet.open(CreatePointComponent,{
      data: { locationId: this.node.modelId },
    });
    const createdPoint = await bottomSheetRef.afterDismissed().toPromise();
    if (!createdPoint) {
      return;
    }
    this.updated.emit();
  }
}
