import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { GlobalCommonModule } from '../../../common/common.module';
import { GlobalInsightsComponent } from '../global-insights/global-insights.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GlobalInsightsComponent
  ],
  imports: [
    GlobalCommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    DashboardComponent,
    GlobalInsightsComponent
  ]
})
export class DashboardModule { }
