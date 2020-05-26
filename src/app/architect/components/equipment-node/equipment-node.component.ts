import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentService } from 'src/app/equipment/equipment.service';
import { ConfirmDialogComponent } from 'src/app/utils/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: '[app-equipment-node]',
  templateUrl: './equipment-node.component.html',
  styleUrls: ['./equipment-node.component.css']
})
export class EquipmentNodeComponent implements OnInit {
  @Input() node: Node;
  @Input() mode: string;
  @Output() updated = new EventEmitter();

  @Output() onEntryConnectorClick = new EventEmitter<Node>();
  @Output() onExitConnectorClick = new EventEmitter<Node>();
  constructor(

    public dialog: MatDialog,
    private locationService: EquipmentService
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
