import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEquipmentComponent } from './components/create-equipment/create-equipment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CreateEquipmentComponent
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
  ],
  entryComponents: [
    CreateEquipmentComponent
  ],
  exports: [
    CreateEquipmentComponent
  ]
})
export class EquipmentModule { }
