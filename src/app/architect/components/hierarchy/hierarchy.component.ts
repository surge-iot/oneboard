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

    let relationships = [];
    for(let l of locations){
      relationships.push(...l.children.map(c =>{
        return {
          id: `link-${c.id}-${l.id}`,
          target: 'location-'+c.id,
          source: 'location-'+l.id,
          stroke: '#009688'
        }
      }));

      relationships.push(...l.links.map(c =>{
        return {
          id: `link-${c.id}-${l.id}`,
          target: 'location-'+c.id,
          source: 'location-'+l.id,
          stroke: '#2196f3',
          strokeDashArray:"10, 10"
        }
      }));
    };
    this.links = relationships;
  }
}
