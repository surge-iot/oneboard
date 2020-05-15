import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectRoutingModule } from './architect-routing.module';
import { BlueprintComponent } from './components/blueprint/blueprint.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [BlueprintComponent, HierarchyComponent],
  imports: [
    CommonModule,
    ArchitectRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgxGraphModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule
  ]
})
export class ArchitectModule { }
