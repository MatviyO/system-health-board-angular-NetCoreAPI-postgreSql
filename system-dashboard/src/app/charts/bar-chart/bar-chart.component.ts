import {Component, OnInit} from '@angular/core';

const BarChartData: any[] = [
  {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
  {data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales'}
];
const BarChartLabels: string[] = [
  'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChartData: any[];
  barChartLabels: string[];
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLegend = false;
  barChartType = 'bar';

  constructor() {
  }

  ngOnInit(): void {
    this.barChartData = BarChartData;
    this.barChartLabels = BarChartLabels
  }

}
