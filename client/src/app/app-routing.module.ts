import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './features/main-dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
