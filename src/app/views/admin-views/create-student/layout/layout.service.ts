import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

// Custom Services
import { AppLoaderService } from '../../../../commonModule/app-loader/app-loader.service';

// Custom Models
import { URLS } from '../../../../commonModule/firebase-URLS/urls.model';

@Injectable()
export class LayoutService {
  validateData: any[] = [];
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,
    private apploader: AppLoaderService,
    private router: Router) { }

  // Save Student Data

  saveStudentData(studentInput: any) {
    let url = URLS.setStudentData;
    this.db.list(url).push(studentInput).then(res => {
      this.apploader.close();
      this.router.navigate(['admin', 'students-list']);
    });
  }

  validateAndSaveData(dataInput: any) {
    this.apploader.open();
    const index = this.validateData.findIndex(obj => obj.personalInfo.email === dataInput.personalInfo.email);
    if(index === -1) {
      this.saveStudentData(dataInput);
    } else {
      // error student already exist
      this.apploader.close();
      return false;
    }
  }

  // Validating users 
  getStudentData() {
    // this.apploader.open();
    let url = URLS.getStudentData;
    let validateData = [];
    this.db.list(url).snapshotChanges().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        let data = res[i].payload.val();
        data['key'] = res[i].key;
        validateData.push(data);
      }
    });
    this.setValidateData(validateData);
  }

  setValidateData(dataInput: any) {
    this.validateData = dataInput;
  }

  getValidateData() {
    return this.validateData;
  }
}
