import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

// Custom Model
import { StudenList } from './students-list.model';
import { URLS } from '../../../commonModule/firebase-URLS/urls.model';

// Custom Service
import { StudentsListService } from './students-list.service';
import {AppLoaderService} from '../../../commonModule/app-loader/app-loader.service';

// Custom Component 
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  paginationLength: number;

  displayedColumns: string[] = ['studentName', 'fatherName', 'phoneNumber', 'qualification', 'branch', 'status', 'icons'];
  dataSource: MatTableDataSource<StudenList>
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentsListService, private db: AngularFireDatabase,
    private dialog: MatDialog,
  private appLoader: AppLoaderService) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    let url = URLS.getStudentData;
    let studentList = [];
    this.db.list(url).snapshotChanges().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        let data = res[i].payload.val();
        data['key'] = res[i].key;
        studentList.push(data);
      }
      let list = studentList;
      this.dataSource = new MatTableDataSource(list);
      this.dataSource.paginator = this.paginator;
      this.paginationLength = list.length;
    })
  }
  deleteStudent(data) {
    this.appLoader.open();
    let dialogRef = this.dialog.open(AlertDialogComponent, {
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
      data: {
        message: 'Are You Sure ? Want to delete ?',
        okLabel: 'Yes',
        cancelLabel: 'No',
        decide: true
      }
    }).afterClosed().subscribe(res => {
      if (res === 'true') {
        let url = URLS.getStudentData;
        this.db.list(url).remove(data.key).then(res => {
          console.log(res);
          this.appLoader.close();
          this.getStudentList();
        }).catch(error => {
          this.appLoader.close();
        })
      } else {
        this.appLoader.close();
      }
    })
  }
}
