import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LocationService, Location } from '../../location/location.service'
import { Equipment, EquipmentService } from 'src/app/equipment/equipment.service';
import { Point, PointService } from 'src/app/point/point.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-manager-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.css']
})
export class OperateComponent implements OnInit {
  children: Location[];
  location: Location;
  path: Location[];
  equipments: Equipment[];
  points: Point[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private equipmentService: EquipmentService,
    private pointService: PointService
    ) {
    this.children = [];
  }
  async ngOnInit(): Promise<void> {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.locationService.findById(+params.get('id')))
    ).subscribe((location: Location) => {
      this.location = location;
      this.postInit();
    });

  }

  async postInit() {
    this.children = await this.locationService.findChildren(this.location.id).toPromise();
    this.equipments = await this.equipmentService.findAll({ locationId: this.location.id }).toPromise();
    this.points = (await this.pointService.findAll({ locationId: this.location.id }).toPromise()).filter((point) => point.equipmentId === null);
  }

}
