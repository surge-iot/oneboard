import { Component, OnInit } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { LocationService } from '../../../location/location.service';
import { EquipmentService } from '../../../equipment/equipment.service';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor(private locationService: LocationService,
    private equipmentService: EquipmentService) { }

  nodes: Node[];
  links: Link[];

  ngOnInit(): void {
    this.postInit();
  }

  async postInit() {
    const locations = await this.locationService.findAll().toPromise();
    const equipments = await this.equipmentService.findAll().toPromise();
    this.nodes = locations.map(c => {
      return {
        id: 'location-' + c.id,
        label: c.name
      }
    });
    this.nodes = [...this.nodes,
      ...equipments.map(c => {
      return {
        id: 'equipment-' + c.id,
        label: c.name
      }
    })]

    let relationships = [];
    for (let l of locations) {
      relationships.push(...l.children.map(c => {
        return {
          id: `link-l${c.id}-l${l.id}`,
          target: 'location-' + c.id,
          source: 'location-' + l.id,
          stroke: '#009688'
        }
      }));

      relationships.push(...l.links.map(c => {
        return {
          id: `link-l${c.id}-l${l.id}`,
          target: 'location-' + c.id,
          source: 'location-' + l.id,
          stroke: '#009688',
          strokeDashArray: "10, 10"
        }
      }));
    };

    for (let e of equipments) {
      // Equipment children
      relationships.push(...e.children.map(c => {
        return {
          id: `link-e${c.id}-e${e.id}`,
          target: 'equipment-' + c.id,
          source: 'equipment-' + e.id,
          stroke: '#f43336'
        }
      }));
      // Equipment links
      relationships.push(...e.links.map(c => {
        return {
          id: `link-e${c.id}-e${e.id}`,
          target: 'equipment-' + c.id,
          source: 'equipment-' + e.id,
          stroke: '#f43336',
          strokeDashArray: "10, 10"
        }
      }));

    };
    // Equipment locations
    relationships.push(...equipments.filter(e=>e.locationId!==null).map(e => {
      return {
        id: `link-e${e.id}-l${e.locationId}`,
        target: 'equipment-' + e.id,
        source: 'location-' + e.locationId,
        stroke: '#2196f3',
      }
    }));
    this.links = relationships;
  }
}
