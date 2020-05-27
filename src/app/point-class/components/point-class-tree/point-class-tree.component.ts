import { Component, OnInit, Input, Injectable } from '@angular/core';
import { GenericTreeComponent } from 'src/app/utils/components/generic-tree/generic-tree.component';
import { PointClassService } from '../../point-class.service';



@Component({
  selector: 'app-point-class-tree',
  templateUrl: '../../../utils/components/generic-tree/generic-tree.component.html',
  styleUrls: ['../../../utils/components/generic-tree/generic-tree.component.css'],
})
export class PointClassTreeComponent extends GenericTreeComponent {

  constructor(
    private pointClassService: PointClassService,
  ) {
    super(pointClassService);
  }
}
