import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LocationClassService } from '../../services/location-class.service';
import { EquipmentClassService } from '../../services/equipment-class.service';
import { PointClassService } from '../../services/point-class.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { CreateSubClassComponent } from '../create-sub-class/create-sub-class.component';

export interface Node {
  id: string;
  label: string;
}

export interface Link {
  id: string;
  source: string;
  target: string;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private locationClassService: LocationClassService,
    private equipmentClassService: EquipmentClassService,
    private pointClassService: PointClassService,
    private _bottomSheet: MatBottomSheet) {
      this.services={
        location:locationClassService,
        equipment:equipmentClassService,
        point:pointClassService
      }
  }
  classType: string;
  nodes: Node[];
  links: Link[];
  services: {
    location: LocationClassService ,
    equipment: EquipmentClassService,
    point: PointClassService
  };

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('class-type'))
      )
    ).subscribe((d) => {
      this.classType = d;
      this.postInit();
    });

  }

  async postInit() {
    const classes = await this.services[this.classType].findAll().toPromise();
    this.nodes = classes.map(c => {
      return {
        id: c.id,
        label: c.name
      }
    });
    this.links = classes.filter(c => c.parentId !== null).map(c => {
      return {
        id: `${c.id}-${c.parentId}`,
        target: c.id,
        source: c.parentId
      }
    });
  }

  onDelete(id) {
    console.log('Delete ', id);
  }

  onCreateChild(node:Node){
    console.log("create child of ", node.label);
    this._bottomSheet.open(CreateSubClassComponent,{
      data: { node, service: this.services[this.classType] },
    });

  }

}

