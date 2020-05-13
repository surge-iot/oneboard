import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTreeComponent } from './location-tree/location-tree.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LocationBreadcrumbComponent } from './location-breadcrumb/location-breadcrumb.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LocationTreeComponent,
    LocationBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Material
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  exports: [
    LocationTreeComponent,
    LocationBreadcrumbComponent
  ]
})
export class LocationModule { }
