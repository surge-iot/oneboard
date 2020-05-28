import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../../equipment.service';

@Component({
  selector: 'app-ceilingfan',
  templateUrl: './ceilingfan.component.html',
  styleUrls: ['./ceilingfan.component.css']
})
export class CeilingfanComponent implements OnInit {

  constructor() { }
  @Input() equipment: Equipment;
  speed:number;
  switch:boolean;
  ngOnInit(): void {
    this.switch = this.equipment.points.filter((point)=>point.classId==='SETPOINT.SWITCH')[0].meta.switch || false;
    this.speed = this.equipment.points.filter((point)=>point.classId==='SETPOINT.SPEED')[0].meta.speed || 0;
  }

}
