import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../../equipment.service';

@Component({
  selector: 'app-equipment-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})
export class AcComponent implements OnInit {

  constructor() { }
  @Input() equipment: Equipment;
  isOn:boolean;
  temperature: number;

  ngOnInit(){
    try{
      this.isOn = this.equipment.points.filter(p =>p.classId==='COMMAND.SWITCH')[0].meta.value;
      this.temperature = this.equipment.points.filter(p =>p.classId==='COMMAND.TEMPERATURE')[0].meta.value;
    }catch{
      this.isOn = false;
      this.temperature = 25;
    }
  }
  async onSwitchChange(point){
    this.isOn = point.meta.value;
  }
  async onSpeedChange(point){
    this.temperature = point.meta.value;
  }
}
