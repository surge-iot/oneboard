import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {
  @Input() device;
  embedUrl:string;
  constructor() { }

  ngOnInit(): void {
    this.embedUrl = `${this.device.class.meta['embed']}&var-device_id=${this.device.serial}`;
  }

}
