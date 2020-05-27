import { Component, OnInit, Input, Injectable } from '@angular/core';
import { GenericTreeComponent } from 'src/app/utils/components/generic-tree/generic-tree.component';
import { LocationClassService } from '../../location-class.service';



@Component({
  selector: 'app-location-class-tree',
  templateUrl: '../../../utils/components/generic-tree/generic-tree.component.html',
  styleUrls: ['../../../utils/components/generic-tree/generic-tree.component.css'],
})
export class LocationClassTreeComponent extends GenericTreeComponent {

  constructor(
    private locationClassService: LocationClassService,
  ) {
    super(locationClassService);
  }
}
