// Predefined 
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatStepper, MatDialog } from '@angular/material';

// custom model
import { StudentData } from '../create-student.model';

// Custom Services
import { LayoutService } from './layout.service';

// Custom Component 
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';
import {PreviewStudentComponent} from '../preview-student/preview-student.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
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
  constructor(private layoutService: LayoutService,
    private dialog: MatDialog) {
    this.studentDataObj = new StudentData();
  }

  personalInfoValidate(eve) {
    this.completedStepper.isPersonalInfoComplete = eve.valid;
    this.stepper.next();
    this.studentDataObj.personalInfo = this.personalInfoChild.personalInfoObj;
  }

  educationInfoValidate(eve) {
    this.completedStepper.isEducationInfoComplete = eve.valid;
    this.stepper.next();
    this.studentDataObj.educationalInfo = this.educationalInfoChild.educationalInfoObj;
  }
  confirmInfoValidate(eve) {
    this.completedStepper.isPersonalInfoComplete = eve.valid;
    this.studentDataObj.confirmInfo = this.confirmInfoChild.confirmInfoObj;
    const isValid = this.layoutService.validateAndSaveData(this.studentDataObj);
    if (isValid === false) {
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: true,
        data: {
          message: 'User Already Exist Please Try some other'
        }
      })
    }
  }

  ngOnInit() {
    this.layoutService.getStudentData();
  }
}
