import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {AppLoaderService} from '../../../commonModule/app-loader/app-loader.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  studentDataArray: any[];
  isError = new Subject<boolean>();
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,
    private router: Router,
    private appLoaderService: AppLoaderService) { }

  // Signup a new user
  setLoginData(data) {
    let url = '/loginData/';
    this.db.list(url).push(data);
  }

  // Get all the users Information
  getLoginData(userData) {
    let url = '/loginData/';
    let studentData = [];
    let data = this.db.list(url).snapshotChanges().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (studentData.indexOf(res[i].key) === -1) {
          let key = res[i].key;
          let data = res[i].payload.val();
          data['key'] = key;
          studentData.push(data);
        }
      }
      this.setStudentData(studentData);
      if (this.studentDataArray.length > 0) {
        for (let i = 0; i < this.studentDataArray.length; i++) {
          if (this.studentDataArray[i].username === userData.username && this.studentDataArray[i].password === userData.password) {
            this.router.navigate(['admin', 'dashboard']);
            this.appLoaderService.close();
            break;
          } else {
            this.isError.next(true);
          }
        }
      }
    })
  }

  getIsError(): Observable<boolean> {
    return this.isError.asObservable();
  }

  setStudentData(data: any) {
    this.studentDataArray = data;
  }
}
