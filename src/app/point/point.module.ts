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
import { TemperatureComponent } from './components/command/temperature/temperature.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';
import { PointComponent } from './components/point/point.component';

@NgModule({
  declarations: [
    CreatePointComponent,
    SwitchComponent,
    SpeedComponent,
    TemperatureComponent,
    PointComponent
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
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    DragDropModule,
    // App
    PointClassModule,
    // 3rd party
    ResizableModule,
  ],
  entryComponents: [
    CreatePointComponent,
  ],
  exports: [
    CreatePointComponent,
    SwitchComponent,
    TemperatureComponent,
    SpeedComponent,
    PointComponent,
  ]
})
export class PointModule { }
