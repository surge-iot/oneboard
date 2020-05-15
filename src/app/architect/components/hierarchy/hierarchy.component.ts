import { Component, OnInit } from '@angular/core';
import { Node, Link } from '../../../utils/interfaces/graph.interface';
import { LocationService } from '../../../location/location.service';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  nodes:Node[];
  links:Link[];

  ngOnInit(): void {
    this.postInit();
  }

  async postInit() {
    const locations = await this.locationService.findAll().toPromise();
    this.nodes = locations.map(c => {
      return {
        id: 'location-'+c.id,
        label: c.name
      }
    });
    this.links = locations.filter(c => c.parentId !== null).map(c => {
      return {
        id: `link-${c.id}-${c.parentId}`,
        target: 'location-'+c.id,
        source: 'location-'+c.parentId
      }
    });
  }
}
