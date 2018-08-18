import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import {URLS} from '../../../commonModule/firebase-URLS/urls.model';
// Custom Model
import {StudenList} from './students-list.model';

// Custom Service
import {StudentsListService} from './students-list.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  paginationLength: number;
  displayedColumns: string[] = ['studentName', 'fatherName', 'phoneNumber','qualification','branch', 'status'];
  dataSource : StudenList[] = [];
  constructor(private studentService: StudentsListService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    let url = URLS.getStudentData;
    let studentList = [];
    this.db.list(url).snapshotChanges().subscribe(res => {
      for(let i=0; i< res.length; i++) {
        let data = res[i].payload.val();
        data['key'] = res[i].key;
        studentList.push(data);
      }
      this.dataSource = studentList;
      this.paginationLength = this.dataSource.length;
    })
  }
}
