import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MaterialModule} from '../../../commonModule/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
