import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePointComponent } from './components/create-point/create-point.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PointClassModule } from '../point-class/point-class.module';
import { SwitchComponent } from './components/command/switch/switch.component';
import { SpeedComponent } from './components/command/speed/speed.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CreatePointComponent,
    SwitchComponent,
    SpeedComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule,
    // App
    PointClassModule,
  ],
  entryComponents: [
    CreatePointComponent,
  ],
  exports: [
    CreatePointComponent,
    SwitchComponent,
    SpeedComponent,
  ]
})
export class PointModule { }
