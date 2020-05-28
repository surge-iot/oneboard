import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Equipment } from '../../equipment.service';
import { PipeTransform, Pipe } from '@angular/core';


@Component({
  selector: 'app-equipment-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent implements OnInit {

  constructor() { }
  // @Input() equipment: Equipment;
  private _equipment: Equipment;
  @Input() set equipment(value: Equipment) {
    this._equipment = value;
    this.numLights = this._equipment.meta.width / 300 >> 0;
  }
  get equipment(): Equipment {
    return this._equipment;
  }
  switch: boolean = false;
  switchCommandExists: boolean = false;
  numLights = 1;
  ngOnInit(): void {
    try {
      this.switchCommandExists = this._equipment.points.filter(p => p.classId === 'COMMAND.SWITCH').length != 0;
      this.switch = this._equipment.points.filter((point) => point.classId === 'SETPOINT.SWITCH')[0].meta.switch;
    }
    catch{
    }
  }

}
