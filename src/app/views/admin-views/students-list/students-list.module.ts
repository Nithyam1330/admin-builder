// Predefined Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

// Custom Modules
import { StudentsListRoutingModule } from './students-list-routing.module';
import {MaterialModule} from '../../../commonModule/material/material.module';

// Custom Component
import {StudentsListComponent} from './students-list.component';

// Custom Service
import {StudentsListService} from './students-list.service';
@NgModule({
  imports: [
    CommonModule,
    StudentsListRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [StudentsListComponent],
  providers: [StudentsListService]
})
export class StudentsListModule { }
