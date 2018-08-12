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
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  weekSubj: any[] = [];
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
    this.educationalInfoValidEvent.emit(f);
  }

}
