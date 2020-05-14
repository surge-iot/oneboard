import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder } from '@angular/forms';

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
    private formBuilder: FormBuilder,
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { node: Node, service: LocationClassService | EquipmentClassService | PointClassService }) {
    this.parent = data.node;
    this.service = data.service;
    this.createForm = this.formBuilder.group({
      name: '',
      parentId:this.parent.id
    });
  }
  parent: Node;
  name: string;
  createForm;
  service: LocationClassService | EquipmentClassService | PointClassService;
  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  async onSubmit(newClass) {
    // Process checkout data here
    Object.keys(newClass).forEach((key) => (newClass[key] == null) && delete newClass[key]);

    const createdClass = await this.service.create(newClass).toPromise();
    if(createdClass){
      this.createForm.reset();
      this._bottomSheetRef.dismiss(createdClass);
      console.warn('New class created: ', createdClass);
    }
  }
}
