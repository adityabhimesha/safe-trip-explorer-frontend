import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  
  public lineChartData: ChartDataSets[] = [
    { data: [10, 20, 5, 25, 40 ,30, 23, 50, 30, 60, 65, 59, 80, 81, 56, 55, 40], label: 'Price' },
  ];


  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio:2,
    scales: {
      xAxes: [{
      display:false,
      gridLines: {
        display:false,
        }
      }],
      yAxes: [{
        display:false,
        gridLines: {
          display:false,
        }   
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#FFF9D2',
      backgroundColor: '#fff08e26',
    },
    
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  ngOnInit(): void {
    
  }

}
