import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder } from '@angular/forms';

import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { EquipmentClassService, EquipmentClass } from '../../../equipment-class/equipment-class.service';
import { EquipmentService } from '../../equipment.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CreateEquipmentComponent>,
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.createEquipmentForm = this.formBuilder.group({
      name: '',
      classId: '',
      locationId: data.locationId
    });
  }
  createEquipmentForm;
  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  async onSubmit(newEquipment) {

    const createdEquipment = await this.equipmentService.create(newEquipment).toPromise();
    if (createdEquipment) {
      this.createEquipmentForm.reset();
      this._bottomSheetRef.dismiss(createdEquipment);
      console.warn('New class created: ', createdEquipment);
    }
  }
  onClassSelected(equipmentClass){
    console.log(equipmentClass);
    this.createEquipmentForm.controls['classId'].setValue(equipmentClass.id)
  }
}
