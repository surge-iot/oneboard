import { Component, OnInit, Input, Injectable } from '@angular/core';
import { GenericTreeComponent } from 'src/app/utils/components/generic-tree/generic-tree.component';
import { EquipmentClassService } from '../../equipment-class.service';



@Component({
  selector: 'app-equipment-class-tree',
  templateUrl: '../../../utils/components/generic-tree/generic-tree.component.html',
  styleUrls: ['../../../utils/components/generic-tree/generic-tree.component.css'],
})
export class EquipmentClassTreeComponent extends GenericTreeComponent {

  constructor(
    private equipmentClassService: EquipmentClassService,
  ) {
    super(equipmentClassService);
  }
}
