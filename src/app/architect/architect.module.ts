import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectRoutingModule } from './architect-routing.module';
import { BlueprintComponent } from './components/blueprint/blueprint.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';


@NgModule({
  declarations: [BlueprintComponent, HierarchyComponent],
  imports: [
    CommonModule,
    ArchitectRoutingModule
  ]
})
export class ArchitectModule { }
