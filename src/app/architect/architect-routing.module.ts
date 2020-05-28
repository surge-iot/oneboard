import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { BlueprintComponent } from './components/blueprint/blueprint.component';


const routes: Routes = [
  {
    path: 'architect/hierarchy', component: HierarchyComponent,
  }, {
    path: 'architect/blueprint', component: BlueprintComponent
  }, {
    path: 'architect/blueprint/:locationId', component: BlueprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectRoutingModule { }
