import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../../equipment.service';

@Component({
  selector: 'app-equipment-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  constructor() { }
  @Input() equipment: Equipment;
  switch: boolean = false;
  switchCommandExists: boolean = false;
  ngOnInit(): void {
    try {
      this.switchCommandExists = this.equipment.points.filter(p => p.classId === 'COMMAND.SWITCH').length != 0;
      this.switch = this.equipment.points.filter((point) => point.classId === 'SETPOINT.SWITCH')[0].meta.switch;
    }
    catch{

    }

  }


}
