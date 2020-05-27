import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointClassTreeComponent } from './components/point-class-tree/point-class-tree.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    PointClassTreeComponent
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
    PointClassTreeComponent
  ]
})
export class PointClassModule { }
