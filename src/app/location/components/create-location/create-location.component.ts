import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder } from '@angular/forms';

import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { LocationClassService, LocationClass } from '../../../location-class/location-class.service';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<CreateLocationComponent>,
    private formBuilder: FormBuilder,
    private locationService: LocationService,
    ) {
    this.createLocationForm = this.formBuilder.group({
      name: '',
      classId: ''
    });
  }
  createLocationForm;
  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  async onSubmit(newLocation) {

    const createdLocation = await this.locationService.create(newLocation).toPromise();
    if(createdLocation){
      this.createLocationForm.reset();
      this._bottomSheetRef.dismiss(createdLocation);
      console.warn('New class created: ', createdLocation);
    }
  }
  onClassSelected(locationClass){
    console.log(locationClass);
    this.createLocationForm.controls['classId'].setValue(locationClass.id)
  }
}
