import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LocationService, Location } from '../../location/location.service'
@Component({
  selector: 'app-manager-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.css']
})
export class OperateComponent implements OnInit {
  children: Location[];
  location: Location;
  path: Location[];
  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) {
    this.children = [];
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.locationService.getLocation(+params.get('id')))
    ).subscribe((location: Location) => {
      this.location = location;
      this.locationService.getChildren(this.location.id)
        .subscribe((locations: Location[]) => this.children = locations);
      this.locationService.getPath(this.location.id)
        .subscribe((locations: Location[]) => {
          let path = locations;
          this.path = path.reverse();
        });
    });

  }

}
