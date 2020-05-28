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
import { CreateLocationComponent } from '../location/components/create-location/create-location.component';
import { LocationNodeComponent } from './components/location-node/location-node.component';
import { EquipmentNodeComponent } from './components/equipment-node/equipment-node.component';
import { PointNodeComponent } from './components/point-node/point-node.component';
import { CreateEquipmentComponent } from '../equipment/components/create-equipment/create-equipment.component';
import { LocationModule } from '../location/location.module';
import { EquipmentModule } from '../equipment/equipment.module';
import { PointModule } from '../point/point.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BlueprintComponent, HierarchyComponent, LocationNodeComponent, EquipmentNodeComponent, PointNodeComponent],
  imports: [
    // Angular
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    // App
    ArchitectRoutingModule,
    UtilsModule,
    LocationModule,
    EquipmentModule,
    PointModule,
    // 3rd party
    NgxGraphModule,
  ]
})
export class ArchitectModule { }
