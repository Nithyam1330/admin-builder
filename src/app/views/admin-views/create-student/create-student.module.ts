// Predefined
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../commonModule/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
// Custom Routing
import { CreateStudentRoutingModule } from './create-student-routing.module';

// Custom Component
import {CreateStudentComponent} from './create-student.component';
import { LayoutComponent } from './layout/layout.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ConfirmationStatusComponent } from './confirmation-status/confirmation-status.component'
import {ShowErrorComponent} from '../../../commonModule/show-error/show-error.component';

// Custom Derectives
import { PhoneNumberValidatorDirective } from '../../../directives/phone-number-validator.directive';
import {EmailValidatorDirective} from '../../../directives/email-validator.directive';

// Custom Services
import {LayoutService} from './layout/layout.service';
import { PreviewStudentComponent } from './preview-student/preview-student.component';
@NgModule({
  imports: [
    CommonModule,
    CreateStudentRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    CreateStudentComponent,
    LayoutComponent,
    PersonalInfoComponent,
    EducationalDetailsComponent,
    ConfirmationStatusComponent,
    ShowErrorComponent,
    PhoneNumberValidatorDirective,
    EmailValidatorDirective,
    PreviewStudentComponent
  ],
  providers: [
    LayoutService
  ],
  entryComponents: [PreviewStudentComponent]
})
export class CreateStudentModule { }
