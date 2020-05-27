import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePointComponent } from './components/create-point/create-point.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CreatePointComponent,
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
    CreatePointComponent,
  ],
  exports: [
    CreatePointComponent,
  ]
})
export class PointModule { }
