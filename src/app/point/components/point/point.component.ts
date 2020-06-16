import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Point, PointService } from '../../point.service';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {

  constructor(
    private pointService: PointService,
    private cd: ChangeDetectorRef
  ) { }
  @Input() point: Point;
  @Input() mutable: boolean;

  style = {
    top: '100px', left: '100px', width: '200px', height: null,
  }
  ngOnInit(): void {
    this.point.meta = this.point.meta || { x: 100, y: 100, width: null, height: null };
    this.style.top = `${this.point.meta.y || 100}px`;
    this.style.left = `${this.point.meta.x || 100}px`;
    this.style.width = `${this.point.meta.width || 200}px`;
    this.style.height = `${this.point.meta.height}px`;
  }
  constrainPosition(point, dragRef) {
    return { x: (point.x / 10 >> 0) * 10, y: (point.y / 10 >> 0) * 10 };
  }

  async onDragEnd(ev) {
    const distance = ev.distance; //difference between start and end pos
    const element = ev.source;
    this.point.meta.x = this.point.meta.x + distance.x;
    this.point.meta.y = this.point.meta.y + distance.y;
    this.style.top = `${this.point.meta.y}px`;
    this.style.left = `${this.point.meta.x}px`;
    element.reset();
    await this.pointService.update(this.point.id, { meta: this.point.meta }).toPromise();

  }

  async onResizeEnd(event: ResizeEvent) {
    this.point.meta.width = event.rectangle.width;
    this.point.meta.height = event.rectangle.height;
    this.style.width = `${this.point.meta.width}px`;
    this.style.height = `${this.point.meta.height}px`;
    await this.pointService.update(this.point.id, { meta: this.point.meta }).toPromise();
    this.point = { ...this.point }
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
