import { NgModule } from '@angular/core';

import { AngularComponentsModule } from '@sds0307/angular-components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    AngularComponentsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    AngularComponentsModule,
    CommonModule
  ]
})
export class GlobalCommonModule { }
