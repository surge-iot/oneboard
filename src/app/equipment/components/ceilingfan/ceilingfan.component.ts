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
  speed: number = 0;
  switch: boolean = false;
  speedCommandExists: boolean = false;
  switchCommandExists: boolean = false;
  ngOnInit(): void {
    try {
      this.switchCommandExists = this.equipment.points.filter(p => p.classId === 'COMMAND.SWITCH').length != 0;
      this.speedCommandExists = this.equipment.points.filter(p => p.classId === 'COMMAND.SPEED').length != 0;
      this.switch = this.equipment.points.filter((point) => point.classId === 'SETPOINT.SWITCH')[0].meta.switch;
      this.speed = this.equipment.points.filter((point) => point.classId === 'SETPOINT.SPEED')[0].meta.speed;
    }
    catch{

    }

  }

}
