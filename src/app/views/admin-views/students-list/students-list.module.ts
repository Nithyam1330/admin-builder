import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListRoutingModule } from './students-list-routing.module';
import {StudentsListComponent} from './students-list.component';
@NgModule({
  imports: [
    CommonModule,
    StudentsListRoutingModule
  ],
  declarations: [StudentsListComponent]
})
export class StudentsListModule { }
