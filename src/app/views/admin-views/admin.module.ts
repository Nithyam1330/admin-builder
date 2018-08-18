// Predefined
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

// Custom Module
import {MaterialModule} from '../../commonModule/material/material.module';

// Custom Routing
import { AdminRoutingModule } from './admin-routing.module';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [AlertDialogComponent],
  entryComponents: [AlertDialogComponent]
})  
export class AdminModule { }
