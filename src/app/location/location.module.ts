import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTreeComponent } from './tree/location-tree.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LocationTreeComponent
  ],
  imports: [
    CommonModule,
    // Material
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    LocationTreeComponent
  ]
})
export class LocationModule { }
