import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LocationClassService } from '../../services/location-class.service';
import { EquipmentClassService } from '../../services/equipment-class.service';
import { PointClassService } from '../../services/point-class.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateSubClassComponent } from '../create-sub-class/create-sub-class.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../utils/components/confirm-dialog/confirm-dialog.component';
import { Node, Link } from '../../../utils/interfaces/graph.interface';


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
    private _bottomSheet: MatBottomSheet,
    public _dialog: MatDialog) {
    this.services = {
      location: locationClassService,
      equipment: equipmentClassService,
      point: pointClassService
    }
  }
  classType: string;
  nodes: Node[];
  links: Link[];
  services: {
    location: LocationClassService,
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

  async onDelete(node:Node) {
    console.log('Delete ', node.id);
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: "Are you sure you want to delete this?"
    });

    const confirmed = await dialogRef.afterClosed().toPromise();
    if(!confirmed){
      return;
    }
    const deleted = await this.services[this.classType].delete(node.id).toPromise();
    if(deleted){
      await this.postInit();
    }
  }

  async onCreateChild(node: Node) {
    const bottomSheetRef = this._bottomSheet.open(CreateSubClassComponent, {
      data: { node, service: this.services[this.classType] },
    });
    const createdClass = await bottomSheetRef.afterDismissed().toPromise();
    if (!createdClass) {
      return;
    }
    await this.postInit();

  }

}

