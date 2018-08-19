import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-preview-student',
  templateUrl: './preview-student.component.html',
  styleUrls: ['./preview-student.component.css']
})
export class PreviewStudentComponent implements OnInit {
  dataObtained: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.dataObtained = data.studentDetails;
  }
  ngOnInit() {
  }

}
