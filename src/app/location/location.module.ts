import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTreeComponent } from './location-tree/location-tree.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateLocationComponent } from './components/create-location/create-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LocationTreeComponent,
    CreateLocationComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // Material
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [
    CreateLocationComponent,
  ],
  exports: [
    LocationTreeComponent,
    CreateLocationComponent
  ]
})
export class LocationModule { }
