import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Equipment, EquipmentService } from '../../equipment.service';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(
    private equipmentService: EquipmentService,
    private cd: ChangeDetectorRef
  ) { }
  @Input() equipment: Equipment;

  style = {
    top: '100px', left: '100px', width: '200px', height: null,
  }
  ngOnInit(): void {
    this.equipment.meta = this.equipment.meta || { x: 100, y: 100, width: null, height: null };
    this.style.top = `${this.equipment.meta.y || 100}px`;
    this.style.left = `${this.equipment.meta.x || 100}px`;
    this.style.width = `${this.equipment.meta.width || 200}px`;
    this.style.height = `${this.equipment.meta.height}px`;
  }
  constrainPosition(point, dragRef) {
    return { x: (point.x / 10 >> 0) * 10, y: (point.y / 10 >> 0) * 10 };
  }

  async onDragEnd(ev) {
    const distance = ev.distance; //difference between start and end pos
    const element = ev.source;
    this.equipment.meta.x = this.equipment.meta.x + distance.x;
    this.equipment.meta.y = this.equipment.meta.y + distance.y;
    this.style.top = `${this.equipment.meta.y}px`;
    this.style.left = `${this.equipment.meta.x}px`;
    element.reset();
    await this.equipmentService.update(this.equipment.id, { meta: this.equipment.meta }).toPromise();

  }

  async onResizeEnd(event: ResizeEvent) {
    this.equipment.meta.width = event.rectangle.width;
    this.equipment.meta.height = event.rectangle.height;
    this.style.width = `${this.equipment.meta.width}px`;
    this.style.height = `${this.equipment.meta.height}px`;
    console.log(this.style)
    await this.equipmentService.update(this.equipment.id, { meta: this.equipment.meta }).toPromise();
    this.equipment = { ...this.equipment }
  }
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 100;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }
}
