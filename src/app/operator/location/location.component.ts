import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LocationService, Location } from '../../services/location.service'
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  children: Location[];
  location: Location;
  path: Location[];
  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.locationService.getLocation(+params.get('id')))
    ).subscribe((location: Location) => {
      this.location = location;
      this.locationService.getChildren(this.location)
        .subscribe((locations: Location[]) => this.children = locations);
      this.locationService.getPath(this.location)
        .subscribe((locations: Location[]) => {
          let path = locations;
          this.path = path.reverse();
        });
    });

  }

}
