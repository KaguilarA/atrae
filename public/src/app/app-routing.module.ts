import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { SchoolsRouteComponent } from './home/schools-route/schools-route.component';
import { PaylistComponent } from './home/paylist/paylist.component';
import { ReportsComponent } from './home/reports/reports.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    {
      path:  'main',
      component:  MainComponent
    },
    {
      path: `routes`,
      component: SchoolsRouteComponent
    },
    {
      path: `paylist`,
      component: PaylistComponent
    },
    {
      path: `reports`,
      component: ReportsComponent
    }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
