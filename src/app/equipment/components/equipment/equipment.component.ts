import { Component, OnInit, Input } from '@angular/core';
import { Equipment, EquipmentService } from '../../equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(
    private equipmentService: EquipmentService
  ) { }
  @Input() equipment: Equipment;
  ngOnInit(): void {
    this.equipment.meta = this.equipment.meta || {x:0, y:0};
  }
  constrainPosition(point, dragRef) {
    return { x: (point.x / 10 >> 0) * 10, y: (point.y / 10 >> 0) * 10 };
  }

  async onDragEnd(ev) {
    const distance = ev.distance; //difference between start and end pos
    console.log(distance);
    let meta = {...this.equipment.meta};
    try {
      meta.x = meta.x + distance.x;
      meta.y = meta.y + distance.y;
    }
    catch{
      meta = { x: distance.x, y: distance.y };
    }
    await this.equipmentService.update(this.equipment.id, { meta }).toPromise();
  }
}
