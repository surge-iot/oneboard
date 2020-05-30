import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Point, PointService } from 'src/app/point/point.service';

@Component({
  selector: 'app-point-command-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {


  constructor(
    private pointService: PointService
  ) { }
  LOWEST_TEMPERATURE = 16;
  HIGHEST_TEMPERATURE = 30;
  @Output()
  pointChange = new EventEmitter<Point>();

  @Input() point: Point;
  @Input() disabled: boolean = false;

  temperature: number = 0;

  limitValue(value, lower, upper){
    if(value < lower){
      return lower;
    }
    if(value > upper){
      return upper;
    }
    return value;
  }
  async temperatureChange(val: number) {
    this.temperature = this.limitValue(val, this.LOWEST_TEMPERATURE, this.HIGHEST_TEMPERATURE);
    this.point.meta.value = val;
    await this.pointService.update(this.point.id, { meta: this.point.meta }).toPromise();
    this.pointChange.emit(this.point);
  }

  ngOnInit(): void {
    try {
      this.point.meta.value = this.point.meta.value || 25;
      this.temperature = this.point.meta.value;
    }
    catch{
      this.point.meta = { value: 25 };
      this.temperature = 25;
    }
  }

}
