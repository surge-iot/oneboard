import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../device.service';

@Component({
  selector: 'app-device-schneider-meter',
  templateUrl: './schneider-meter.component.html',
  styleUrls: ['./schneider-meter.component.css']
})
export class SchneiderMeterComponent implements OnInit {
  @Input() device: Device;
  embedUrl:string;
  constructor() { }

  ngOnInit(): void {
    this.embedUrl = `${this.device.class.meta['embed']}&var-device_id=${this.device.serial}`;
    console.log(this.embedUrl);
  }

}
