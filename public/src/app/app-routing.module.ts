import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  LoginComponent
} from './login/login.component';
import {
  HomeComponent
} from './home/home.component';
import {
  MainComponent
} from './home/main/main.component';
import {
  SchoolsRouteComponent
} from './home/schools-route/schools-route.component';
import {
  PaylistComponent
} from './home/paylist/paylist.component';
import {
  ReportsComponent
} from './home/reports/reports.component';
import {
  ContractComponent
} from './home/contract/contract.component';
import {
  RegisterContractComponent
} from './home/contract/register-contract/register-contract.component';
import { ViewComponent as ViewContracts } from './home/contract/view/view.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{
        path: 'main',
        component: MainComponent
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
      },
      {
        path: 'registerContract',
        component: RegisterContractComponent
      },
      {
        path: 'viewContracts',
        component: ViewContracts
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
