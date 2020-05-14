import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Node } from '../base/base.component'
import { LocationClassService } from '../../services/location-class.service';
import { EquipmentClassService } from '../../services/equipment-class.service';
import { PointClassService } from '../../services/point-class.service';
@Component({
  selector: 'app-create-sub-class',
  templateUrl: './create-sub-class.component.html',
  styleUrls: ['./create-sub-class.component.css']
})
export class CreateSubClassComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<CreateSubClassComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { node: Node, services: LocationClassService | EquipmentClassService | PointClassService }) {
      this.parent = data.node;
     }
  parent: Node;
  name:string;
  ngOnInit(): void {
    console.log(this.data);
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
