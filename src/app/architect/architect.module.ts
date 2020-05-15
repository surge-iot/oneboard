import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectRoutingModule } from './architect-routing.module';
import { GraphComponent } from './components/graph/graph.component';
import { BlueprintComponent } from './components/blueprint/blueprint.component';


@NgModule({
  declarations: [GraphComponent, BlueprintComponent],
  imports: [
    CommonModule,
    ArchitectRoutingModule
  ]
})
export class ArchitectModule { }
