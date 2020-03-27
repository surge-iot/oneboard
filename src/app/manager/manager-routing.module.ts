import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: 'manager', component: ManagerComponent,
  children: [
    { path: '', component: HomeComponent },
    // { path: 'operate/:id', component: LocationComponent }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
