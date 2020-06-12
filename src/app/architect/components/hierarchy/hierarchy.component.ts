import { Component, OnInit, HostListener } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { LocationService } from '../../../location/location.service';
import { EquipmentService } from '../../../equipment/equipment.service';
import { PointService } from '../../../point/point.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateLocationComponent } from 'src/app/location/components/create-location/create-location.component';
import { ResponseService } from 'src/app/utils/services/response.service';
import { LocationClassService } from 'src/app/location-class/location-class.service';
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private locationClassService: LocationClassService,
    private equipmentService: EquipmentService,
    private _bottomSheet: MatBottomSheet,
    private pointService: PointService,
    private responseService: ResponseService
  ) { }

  nodes: Node[];
  links: Link[];
  mode: string;
  linkNodes: {
    source: Node | null;
    target: Node | null;
  }

  ngOnInit(): void {
    this.postInit();
    this.linkNodes = { source: null, target: null }
    this.mode = '';
  }

  async postInit() {
    const locations = await this.locationService.findAll().toPromise();
    const locationClasses = await this.locationClassService.findAll().toPromise();
    const equipments = await this.equipmentService.findAll().toPromise();
    const points = await this.pointService.findAll().toPromise();
    this.nodes = locations.map(c => {
      return {
        id: 'location-' + c.id,
        modelId: c.id,
        label: c.name || c.id+":"+c.classId,
        type: 'location',
        class: locationClasses.filter(lc => lc.id === c.classId)[0],
      }
    });
    this.nodes = [...this.nodes,
    ...equipments.map(c => {
      return {
        id: 'equipment-' + c.id,
        modelId: c.id,
        label: c.name || c.id+":"+c.classId,
        type: 'equipment',
      }
    })];
    // Points
    this.nodes = [...this.nodes,
    ...points.map(c => {
      return {
        id: 'point-' + c.id,
        modelId: c.id,
        label: c.name || c.id+":"+c.classId,
        type: 'point',
      }
    })]
    // Location Classes
    // this.nodes = [...this.nodes,
    //   ...locationClasses.map(c => {
    //     return {
    //       id: 'location-class-' + c.id,
    //       label: c.name,
    //       type: 'location-class',
    //       meta:c.meta,
    //     }
    //   })];
    let relationships = [];
    for (let l of locations) {
      relationships.push(...l.children.map(c => {
        return {
          id: `link-l${l.id}-l${c.id}`,
          source: 'location-' + l.id,
          target: 'location-' + c.id,
          stroke: '#009688'
        }
      }));
    };

    for (let e of equipments) {
      // Equipment children
      relationships.push(...e.children.map(c => {
        return {
          id: `link-e${e.id}-e${c.id}`,
          source: 'equipment-' + e.id,
          target: 'equipment-' + c.id,
          stroke: '#2196f3'
        }
      }));

    };
    // Equipment locations
    relationships.push(...equipments.filter(e => e.locationId !== null).map(e => {
      return {
        id: `link-l${e.locationId}-e${e.id}`,
        source: 'location-' + e.locationId,
        target: 'equipment-' + e.id,
        stroke: '#00bcd4',
      }
    }));
    // points
    for (let p of points) {
      // is located in
      // if (!p.equipmentId) {
      //   relationships.push({
      //     id: `link-l${p.locationId}-p${p.id}`,
      //     source: 'location-' + p.locationId,
      //     target: 'point-' + p.id,
      //     stroke: '#e91e63'
      //   });
      // }
      // if (p.equipmentId) {
      //   relationships.push({
      //     id: `link-e${p.equipmentId}-p${p.id}`,
      //     source: 'equipment-' + p.equipmentId,
      //     target: 'point-' + p.id,
      //     stroke: '#e91e63'
      //   });
      // }
      // point of locations
      relationships.push(...p.pointOfLocations.map(l => {
        return {
          id: `link-pol-l${l.id}-p${p.id}`,
          source: 'location-' + l.id,
          target: 'point-' + p.id,
          stroke: '#ff94c2',
          strokeDashArray: "10, 10"
        }
      }));
      // point of equipments
      relationships.push(...p.pointOfEquipments.map(e => {
        return {
          id: `link-poe-e${e.id}-p${p.id}`,
          source: 'equipment-' + e.id,
          target: 'point-' + p.id,
          stroke: '#ff94c2',
          strokeDashArray: "10, 10"
        }
      }));

    };
    this.links = relationships;
  }

  async createLocation() {
    const bottomSheetRef = this._bottomSheet.open(CreateLocationComponent);
    const createdLocation = await bottomSheetRef.afterDismissed().toPromise();
    if (!createdLocation) {
      return;
    }
    await this.postInit();

  }

  onUpdated(ev) {
    this.postInit();
  }
  resetMode() {
    this.linkNodes = { source: null, target: null };
    this.mode = '';
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.resetMode();
  }
  async exitConnectorClick(node: Node) {
    console.log(node);
    switch (this.mode) {
      case '':// starting an add-link operation
        this.mode = "add-link-mode";
        this.linkNodes.source = node;
        break;
      case 'remove-link-mode':// completing a remove-link operation
        this.linkNodes.target = node;
        await this.removeLink(this.linkNodes.target, this.linkNodes.source);
        this.resetMode();
        // TODO: unlink the nodes based on type
        break;
      case 'add-link': // invalid operation
        break;
    }

  }
  async entryConnectorClick(node: Node) {
    console.log(node);
    switch (this.mode) {
      case '':// starting a remove-link operation
        this.mode = "remove-link-mode";
        this.linkNodes.source = node;
        break;
      case 'add-link-mode':// completing an add-link operation
        this.linkNodes.target = node;
        // TODO: link the nodes based on type
        await this.addLink(this.linkNodes.source, this.linkNodes.target);
        this.resetMode();
        break;
      case 'remove-link': // invalid operation
        break;
    }
  }
  async addLink(source: Node, target: Node) {
    if (source.id === target.id) {
      this.responseService.openSnackBar("Invalid node combination")
      return;
    }
    if (source.type === 'location' && target.type === 'location') {
      await this.locationService.addChild(source.modelId, target.modelId).toPromise();
    }
    else if (source.type === 'location' && target.type === 'point') {
      await this.pointService.addPointOfLocation(target.modelId, source.modelId).toPromise();
    }
    else if (source.type === 'equipment' && target.type === 'equipment') {
      await this.equipmentService.addChild(source.modelId, target.modelId).toPromise();
    }
    else if (source.type === 'equipment' && target.type === 'point') {
      await this.pointService.addPointOfEquipment(target.modelId, source.modelId).toPromise();
    }
    else {
      this.responseService.openSnackBar("Invalid node combination")

    }
    this.postInit();
  }

  async removeLink(source: Node, target: Node) {
    if (source.id === target.id) {
      this.responseService.openSnackBar("Invalid node combination")
      return;
    }
    if (source.type === 'location' && target.type === 'location') {
      await this.locationService.removeChild(source.modelId, target.modelId).toPromise();
    }
    else if (source.type === 'location' && target.type === 'point') {
      await this.pointService.removePointOfLocation(target.modelId, source.modelId).toPromise();
    }
    else if (source.type === 'equipment' && target.type === 'equipment') {
      await this.equipmentService.removeChild(source.modelId, target.modelId).toPromise();
    }
    else if (source.type === 'equipment' && target.type === 'point') {
      await this.pointService.removePointOfEquipment(target.modelId, source.modelId).toPromise();
    }
    else {
      this.responseService.openSnackBar("Invalid node combination")

    }
    this.postInit();
  }
}
