import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassBuilderRoutingModule } from './class-builder-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BaseComponent } from './components/base/base.component';
import {NgxGraphModule} from '@swimlane/ngx-graph';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    ClassBuilderRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxGraphModule
  ]
})
export class ClassBuilderModule { }
