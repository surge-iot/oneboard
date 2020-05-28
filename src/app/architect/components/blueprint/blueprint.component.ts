import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location, LocationService } from 'src/app/location/location.service';
import { Equipment, EquipmentService } from 'src/app/equipment/equipment.service';
import { Point, PointService } from 'src/app/point/point.service';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private equipmentService: EquipmentService,
    private pointService: PointService
  ) { }
  location: Location;
  equipments: Equipment[];
  points: Point[];

  async ngOnInit(): Promise<void> {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.has('locationId')) {
          return this.locationService.findById(+params.get('locationId'));
        }
        return of({});
      }
      )
    ).subscribe((result: Location) => {
      this.location = result;
      this.postInit();
    })
  }
  onLocationSelected(location) {
    this.router.navigate(['/architect/blueprint', location.id])
  }

  async postInit() {
    this.equipments = await this.equipmentService.findAll({ locationId: this.location.id }).toPromise();
    this.points = (await this.pointService.findAll({ locationId: this.location.id }).toPromise()).filter((point) => point.equipmentId === null);
  }
}
