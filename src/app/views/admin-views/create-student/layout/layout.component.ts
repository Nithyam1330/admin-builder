import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import {StudentData} from '../create-student.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  studentDataObj: StudentData;
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('personalInfoChild') personalInfoChild;
  @ViewChild('educationalInfoChild') educationalInfoChild; 
  @ViewChild('confirmInfoChild') confirmInfoChild;
  isLinear = true;
  completedStepper: {
    isPersonalInfoComplete: boolean,
    isEducationInfoComplete: boolean,
    isConfirmInfoComplete: boolean
  } = {
    isPersonalInfoComplete: false,
    isEducationInfoComplete: false,
    isConfirmInfoComplete: false
  }
  constructor() {  
    this.studentDataObj = new StudentData();
  }

  personalInfoValidate(eve) {
    this.completedStepper.isPersonalInfoComplete =eve.valid;
    this.stepper.next();
    this.studentDataObj.personalInfo = this.personalInfoChild.personalInfoObj;
    console.log(this.personalInfoChild.personalInfoObj);
  }

  educationInfoValidate(eve) {
    this.completedStepper.isEducationInfoComplete = eve.valid;
    this.stepper.next();
    this.studentDataObj.educationalInfo = this.educationalInfoChild.educationalInfoObj;
  }
  confirmInfoValidate(eve) {
    this.completedStepper.isPersonalInfoComplete = eve.valid;
    this.studentDataObj.confirmInfo = this.confirmInfoChild.confirmInfoObj;
    console.log(this.studentDataObj);
  }
}
