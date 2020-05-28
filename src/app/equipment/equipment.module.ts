import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEquipmentComponent } from './components/create-equipment/create-equipment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EquipmentClassModule } from '../equipment-class/equipment-class.module';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CreateEquipmentComponent,
    EquipmentComponent
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
    MatCardModule,
    // App
    EquipmentClassModule,
  ],
  entryComponents: [
    CreateEquipmentComponent
  ],
  exports: [
    CreateEquipmentComponent,
    EquipmentComponent,
  ]
})
export class EquipmentModule { }
