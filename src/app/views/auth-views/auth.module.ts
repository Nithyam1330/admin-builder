import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import {MaterialModule} from '../../layout/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AuthRoutingModule
  ],
  declarations: [
  ]
})
export class AuthModule { }
