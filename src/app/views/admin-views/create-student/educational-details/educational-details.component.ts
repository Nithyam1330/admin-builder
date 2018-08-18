import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { NgForm } from '@angular/forms';
import {EducationalInfo} from './educational-details.model';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
  educationalInfoObj: EducationalInfo;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  isOthersField: boolean = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  weekSubj: any[] = [];
  branchOptions: any[] = [];
  qualificationOptions = [
    {
      key: 'schooling',
      displayValue: 'Schooling'
    },
    {
      key: 'intermediate',
      displayValue: 'Intermediate'
    },
    {
      key: 'diploma',
      displayValue: 'Diploma'
    },
    {
      key: 'ug',
      displayValue: 'Under Graduation'
    }
  ];

  branchOptionsData = {
    schoolOptions: [
      {
        key: 'nursery',
        displayValue: 'Nursery'
      },
      {
        key: 'lkg',
        displayValue: 'LKG'
      },
      {
        key: 'ukg',
        displayValue: 'UKG'
      },
      {
        key: '1st class',
        displayValue: '1st Class'
      },
      {
        key: '2nd class',
        displayValue: '2nd Class'
      },
      {
        key: '3rd class',
        displayValue: '3rd Class'
      },
      {
        key: '4th class',
        displayValue: '4th Class'
      },
      {
        key: '5th class',
        displayValue: '5th Class'
      },
      {
        key: '6th class',
        displayValue: '6th Class'
      },
      {
        key: '7th class',
        displayValue: '7th Class'
      },
      {
        key: '8th class',
        displayValue: '8th Class'
      },
      {
        key: '9th class',
        displayValue: '9th Class'
      },
      {
        key: '10th class',
        displayValue: '10th Class'
      },
      {
        key: 'others',
        displayValue: 'Others'
      }
    ],
    intermediateOptions: [
      {
        key: 'mpc',
        displayValue: 'MPC'
      },
      {
        key: 'bipc',
        displayValue: 'BIPC'
      },
      {
        key: 'mec',
        displayValue: 'MEC'
      },
      {
        key: 'cec',
        displayValue: 'CEC'
      },
      {
        key: 'others',
        displayValue: 'others'
      }
    ],
    diplomaOptions: [
      {
        key: 'cse-diploma',
        displayValue: 'CSE-Diploma'
      },
      {
        key: 'ece-diploma',
        displayValue: 'ECE-Diploma'
      },
      {
        key: 'mech-diploma',
        displayValue: 'MECH-Diploma'
      },
      {
        key: 'eee-diploma',
        displayValue: 'EEE-Diploma'
      },
      {
        key: 'it-diploma',
        displayValue: 'IT-Diploma'
      },
      {
        key: 'others-diploma',
        displayValue: 'Others-Diploma'
      }
    ],
    ugOptions: [
      {
        key: 'cse',
        displayValue: 'CSE'
      },
      {
        key: 'ece',
        displayValue: 'ECE'
      },
      {
        key: 'eee',
        displayValue: 'EEE'
      },
      {
        key: 'mech',
        displayValue: 'MECH'
      },
      {
        key: 'it',
        displayValue: 'IT'
      },
      {
        key: 'others',
        displayValue: 'Others'
      }
    ]
  }
  
  @Output()
  educationalInfoValidEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.educationalInfoObj = new EducationalInfo();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our data
    if (value) {
      this.weekSubj.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(rmValue): void {
    const index = this.weekSubj.indexOf(rmValue);

    if (index >= 0) {
      this.weekSubj.splice(index, 1);
    }
  }
 
  educationalFormValidate(f: NgForm) {
    this.educationalInfoObj.preferredSubject = this.weekSubj.join();
    this.educationalInfoValidEvent.emit(f);
  }

  qualificationChange() {
    if(this.educationalInfoObj.qualification === 'schooling') {
      this.branchOptions = this.branchOptionsData.schoolOptions;
    } else if(this.educationalInfoObj.qualification === 'intermediate'){
      this.branchOptions = this.branchOptionsData.intermediateOptions;
    } else if(this.educationalInfoObj.qualification === 'diploma') {
      this.branchOptions = this.branchOptionsData.diplomaOptions;
    } else if(this.educationalInfoObj.qualification === 'ug') {
      this.branchOptions = this.branchOptionsData.ugOptions;
    }
  }
  othersFieldValidation() {
    if(this.educationalInfoObj.branch === 'others') {
      this.isOthersField = true;
    } else {
      this.isOthersField = false;
    }
  }
}
