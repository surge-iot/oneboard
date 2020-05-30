import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Point, PointService } from 'src/app/point/point.service';

@Component({
  selector: 'app-point-command-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {


  constructor(
    private pointService: PointService
  ) { }
  @Output()
  pointChange = new EventEmitter<Point>();

  @Input() point: Point;
  @Input() disabled: boolean = false;

  speed: number = 0;

  async speedChange(val: number) {
    this.speed = val;
    this.point.meta.value = val;
    await this.pointService.update(this.point.id, { meta: this.point.meta }).toPromise();
    this.pointChange.emit(this.point);
  }

  ngOnInit(): void {
    try {
      this.point.meta.value = this.point.meta.value || 0;
      this.speed = this.point.meta.value;
    }
    catch{
      this.point.meta = { value: 0 };
      this.speed = 0;
    }
  }

}
