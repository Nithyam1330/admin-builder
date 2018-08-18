import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ConfirmationInfo} from './confirmation-status.model';

@Component({
  selector: 'app-confirmation-status',
  templateUrl: './confirmation-status.component.html',
  styleUrls: ['./confirmation-status.component.css']
})
export class ConfirmationStatusComponent implements OnInit {
  confirmInfoObj: ConfirmationInfo;
  pendingOrJoinedDate : any;
  @Output()
  confirmValidateEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.confirmInfoObj = new ConfirmationInfo();
  }

  confirmFormSubmit(f: NgForm) {
     this.confirmInfoObj.date = this.pendingOrJoinedDate.toDateString()
    this.confirmValidateEvent.emit(f);
  }
}
