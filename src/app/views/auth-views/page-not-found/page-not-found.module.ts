import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {MaterialModule} from '../../../commonModule/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
