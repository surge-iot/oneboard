import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceClassTreeComponent } from './components/device-class-tree/device-class-tree.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    DeviceClassTreeComponent
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
    DeviceClassTreeComponent
  ]
})
export class DeviceClassModule { }
