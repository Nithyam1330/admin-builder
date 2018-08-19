import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  dataObtained: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data) { 
    this.dataObtained = data;
  }

  ngOnInit() {
  }

}
