import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PersonalInfo} from './personal-info.model';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoObj: PersonalInfo;
  @ViewChild('myForm') myForm;
  @Output()
  personalInfoValidEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
  }

  ngOnInit() {
    this.personalInfoObj = new PersonalInfo();
  }

  submitPersonalInfo(f: NgForm) {
      this.personalInfoValidEvent.emit(f);
  }
}
