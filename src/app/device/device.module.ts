import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchneiderMeterComponent } from './components/schneider-meter/schneider-meter.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [SchneiderMeterComponent],
  imports: [
    CommonModule,
    UtilsModule,
  ],
  exports: [
    SchneiderMeterComponent,
  ]
})
export class DeviceModule { }
