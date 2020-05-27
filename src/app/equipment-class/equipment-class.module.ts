import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentClassTreeComponent } from './components/equipment-class-tree/equipment-class-tree.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    EquipmentClassTreeComponent
  ],
  imports: [
     // Core
     CommonModule,
     RouterModule,
     // Material
     MatButtonModule,
     MatIconModule,
     MatTooltipModule,
     MatTreeModule,
     MatProgressBarModule,
  ],
  exports: [
    EquipmentClassTreeComponent
  ]
})
export class EquipmentClassModule { }
