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
  numLights = 1;
  isOn: boolean = false;

  ngOnInit(): void {
    try {
      this.isOn = this.equipment.points.filter(p =>p.classId==='COMMAND.SWITCH')[0].meta.value;
    }
    catch{
      this.isOn = false;
    }
  }
  async onSwitchChange(point){
    this.isOn = point.meta.value;
  }
}
