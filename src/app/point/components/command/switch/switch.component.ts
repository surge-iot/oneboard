import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Point, PointService } from 'src/app/point/point.service';

@Component({
  selector: 'app-point-command-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor(
    private pointService: PointService
  ) { }

  @Output()
  pointChange = new EventEmitter<Point>();

  @Input() point: Point;
  @Input() disabled: boolean = false;

  isOn: boolean = false;

  async isOnChange(val: boolean) {
    this.isOn = val;
    this.point.meta.value = val;
    await this.pointService.update(this.point.id, { meta: this.point.meta }).toPromise();
    this.pointChange.emit(this.point);
  }

  ngOnInit(): void {
    try {
      this.point.meta.value = this.point.meta.value || false;
      this.isOn = this.point.meta.value;
    }
    catch{
      this.point.meta = { value: false };
      this.isOn = false;
    }
  }

}
