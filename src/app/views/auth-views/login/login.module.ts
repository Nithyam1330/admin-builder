import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import {MaterialModule} from '../../../commonModule/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
