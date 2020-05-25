import { Component, OnInit } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { LocationService } from '../../../location/location.service';
import { EquipmentService } from '../../../equipment/equipment.service';
import { PointService } from '../../../point/point.service';
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor(private locationService: LocationService,
    private equipmentService: EquipmentService,
    private pointService: PointService) { }

  nodes: Node[];
  links: Link[];

  ngOnInit(): void {
    this.postInit();
  }

  async postInit() {
    const locations = await this.locationService.findAll().toPromise();
    const equipments = await this.equipmentService.findAll().toPromise();
    const points = await this.pointService.findAll().toPromise();
    this.nodes = locations.map(c => {
      return {
        id: 'location-' + c.id,
        label: c.name,
        color: '#009688'
      }
    });
    this.nodes = [...this.nodes,
      ...equipments.map(c => {
      return {
        id: 'equipment-' + c.id,
        label: c.name,
        color: '#2196f3'
      }
    })];
    // Points
    this.nodes = [...this.nodes,
      ...points.map(c => {
      return {
        id: 'point-' + c.id,
        label: c.classId,
        color: '#e91e63',
        borderRadius:'15'
      }
    })]

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
    relationships.push(...equipments.filter(e=>e.locationId!==null).map(e => {
      return {
        id: `link-l${e.locationId}-e${e.id}`,
        source: 'location-' + e.locationId,
        target: 'equipment-' + e.id,
        stroke: '#00bcd4',
      }
    }));
    // points
    for (let p of points) {
      // point of locations
      relationships.push(...p.pointOfLocations.map(l => {
        return {
          id: `link-l${l.id}-p${p.id}`,
          source: 'location-' + l.id,
          target: 'point-' + p.id,
          stroke: '#e91e63',
          strokeDashArray: "10, 10"
        }
      }));
      // point of equipments
      relationships.push(...p.pointOfEquipments.map(e => {
        return {
          id: `link-l${e.id}-p${p.id}`,
          source: 'equipment-' + e.id,
          target: 'point-' + p.id,
          stroke: '#e91e63',
          strokeDashArray: "10, 10"
        }
      }));

    };
    this.links = relationships;
  }
}
