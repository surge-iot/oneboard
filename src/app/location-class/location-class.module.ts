import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationClassTreeComponent } from './components/location-class-tree/location-class-tree.component';
import { UtilsModule } from '../utils/utils.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LocationClassTreeComponent
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
    LocationClassTreeComponent
  ]
})
export class LocationClassModule { }
