import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder } from '@angular/forms';

import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { LocationClassService } from '../../../class-builder/services/location-class.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<CreateLocationComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { node: Node, service: LocationClassService }) {
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
  service: LocationClassService;
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
