import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthModule } from '../auth/auth.module';
import { LocationModule } from '../location/location.module';
import { OperateComponent } from './operate/operate.component';
import { EquipmentModule } from '../equipment/equipment.module';
import { PointModule } from '../point/point.module';


@NgModule({
  declarations: [HomeComponent, ManagerComponent, OperateComponent],
  imports: [
    // Angular
    CommonModule,
    ManagerRoutingModule,
    LayoutModule,
    // Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    // App
    AuthModule,
    LocationModule,
    EquipmentModule,
    PointModule,
  ]
})
export class ManagerModule { }
