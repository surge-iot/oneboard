import { Component, OnInit, Input } from '@angular/core';

import { LocationService, Location } from '../location.service'

@Component({
  selector: 'app-location-breadcrumb',
  templateUrl: './location-breadcrumb.component.html',
  styleUrls: ['./location-breadcrumb.component.css']
})
export class LocationBreadcrumbComponent implements OnInit {
  @Input()
  location: Location
  @Input()
  linkRelativeTo: string
  path: Location[]

  constructor(private locationService: LocationService) {
  }
  ngOnInit():void{}
  ngOnChanges(): void {
    this.locationService.getPath(this.location.id)
    .subscribe((locations: Location[]) => {
      let path = locations;
      this.path = path.reverse();
    });
  }

}
