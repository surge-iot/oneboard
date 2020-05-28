import { Component } from '@angular/core';
import { GenericTreeComponent } from 'src/app/utils/components/generic-tree/generic-tree.component';
import { LocationService } from '../../location.service';



@Component({
  selector: 'app-location-tree',
  templateUrl: '../../../utils/components/generic-tree/generic-tree.component.html',
  styleUrls: ['../../../utils/components/generic-tree/generic-tree.component.css'],
})
export class LocationTreeComponent extends GenericTreeComponent {

  constructor(
    private locationService: LocationService,
  ) {
    super(locationService);
  }
}
