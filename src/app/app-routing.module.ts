import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent,
    children : [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component, canActivate: [AuthGuard]},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables', component: TablesComponent},
      { path: 'charts', component: ChartsComponent},
      // {
      //   path: 'pages',
      //   children: [
      //     { path: 'blank', component: BlankComponent },
      //     { path: 'blank/:type', component: BlankComponent }
      //   ]
      // },
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
