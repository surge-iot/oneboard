import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../../equipment.service';

@Component({
  selector: 'app-equipment-ceilingfan',
  templateUrl: './ceilingfan.component.html',
  styleUrls: ['./ceilingfan.component.css']
})
export class CeilingfanComponent implements OnInit {

  constructor() { }
  @Input() equipment: Equipment;
  isOn:boolean;
  speed: number;

  ngOnInit(){
    try{
      this.isOn = this.equipment.points.filter(p =>p.classId==='COMMAND.SWITCH')[0].meta.value;
      this.speed = this.equipment.points.filter(p =>p.classId==='COMMAND.SPEED')[0].meta.value;
    }catch{
      this.isOn = false;
      this.speed = 0;
    }
  }
  async onSwitchChange(point){
    this.isOn = point.meta.value;
  }
  async onSpeedChange(point){
    this.speed = point.meta.value;
  }
}
