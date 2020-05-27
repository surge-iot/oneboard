import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder } from '@angular/forms';

import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { PointClassService, PointClass } from '../../../point-class/point-class.service';
import { PointService } from '../../point.service';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.css']
})
export class CreatePointComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CreatePointComponent>,
    private formBuilder: FormBuilder,
    private pointService: PointService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.createPointForm = this.formBuilder.group({
      name: '',
      classId: '',
      locationId: data.locationId,
      equipmentId: data.equipmentId
    });
  }
  createPointForm;
  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  async onSubmit(newPoint) {

    const createdPoint = await this.pointService.create(newPoint).toPromise();
    if (createdPoint) {
      this.createPointForm.reset();
      this._bottomSheetRef.dismiss(createdPoint);
      console.warn('New class created: ', createdPoint);
    }
  }
  onClassSelected(pointClass){
    console.log(pointClass);
    this.createPointForm.controls['classId'].setValue(pointClass.id)
  }
}
