import { Component, OnInit, Input, Injectable } from '@angular/core';
import { GenericTreeComponent } from 'src/app/utils/components/generic-tree/generic-tree.component';
import { DeviceClassService } from '../../device-class.service';



@Component({
  selector: 'app-device-class-tree',
  templateUrl: '../../../utils/components/generic-tree/generic-tree.component.html',
  styleUrls: ['../../../utils/components/generic-tree/generic-tree.component.css'],
})
export class DeviceClassTreeComponent extends GenericTreeComponent {

  constructor(
    private deviceClassService: DeviceClassService,
  ) {
    super(deviceClassService);
  }
}
