import { Injectable } from '@angular/core';
import { DeviceClass } from '../device-class/device-class.service';

export interface Device {
  id: number;
  classId: string;
  class:DeviceClass;
  serial?: string;
  locationId: number | null;
  meta: any;
}
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }
}
