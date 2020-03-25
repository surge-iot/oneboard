import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperatorComponent } from './operator/operator.component';
import { HomeComponent } from './operator/home/home.component';
import { LocationComponent } from './operator/location/location.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'operator', component: OperatorComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'location/:id', component: LocationComponent }
    ]
  },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
