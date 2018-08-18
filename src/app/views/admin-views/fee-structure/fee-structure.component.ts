import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.css']
})
export class FeeStructureComponent implements OnInit {
  pieChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
}
pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
pieChartColor:any = [
  {
      backgroundColor: [
      '#1ea9e0',
      '#ffa500',
      '#8b8888',
      '#ffa1b5',
      '#ff6600'
      ]
  }
]

pieChartData:any =[
   {
     "data": [
       47, 9, 28, 54, 77
      ] 
    }
  ]
  legendPosition: string;

  constructor() {
  }

  onChartClick(event) {
    
}
  ngOnInit() {
  }

}
