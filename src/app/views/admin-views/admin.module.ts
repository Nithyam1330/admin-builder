// Predefined
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Routing

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: []
})  
export class AdminModule { }
