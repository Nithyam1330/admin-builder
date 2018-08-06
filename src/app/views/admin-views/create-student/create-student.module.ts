import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../commonModule/material/material.module';
import {FlexModule} from '@angular/flex-layout';
import { CreateStudentRoutingModule } from './create-student-routing.module';
import {CreateStudentComponent} from './create-student.component';
import { LayoutComponent } from './layout/layout.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ConfirmationStatusComponent } from './confirmation-status/confirmation-status.component'
@NgModule({
  imports: [
    CommonModule,
    CreateStudentRoutingModule,
    MaterialModule,
    FlexModule
  ],
  declarations: [
    CreateStudentComponent,
    LayoutComponent,
    PersonalInfoComponent,
    EducationalDetailsComponent,
    ConfirmationStatusComponent
  ]
})
export class CreateStudentModule { }
