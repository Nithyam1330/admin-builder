import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import {URLS} from '../../../commonModule/firebase-URLS/urls.model';
@Injectable()
export class StudentsListService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  getStudentList(){
    let url = URLS.getStudentData;
    let studentList = [];
    this.db.list(url).snapshotChanges().subscribe(res => {
      for(let i=0; i< res.length; i++) {
        let data = res[i].payload.val();
        data['key'] = res[i].key;
        studentList.push(data);
      }
    })
    return studentList;
  }
}
