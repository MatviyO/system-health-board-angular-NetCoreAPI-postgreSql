import { Component, OnInit } from '@angular/core';
import {LineChartColors} from '../../shared/chart.colors';

const LineChartData: any[] = [
  {data: [65, 59, 80, 81, 56, 54, 30], label: 'Sentiment Analysis'},
  {data: [25, 39, 60, 91, 36, 54, 50], label: 'Image Recognition'},
  {data: [25, 39, 60, 91, 36, 54, 50], label: 'Forcasting'}

  ];
const LineChartLabels: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChartData: any[];
  lineChartLabels: string[];
  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  lineChartColors: any[];
  lineChartLegend = true;
  lineChartType = 'line';

  constructor() {
  }

  ngOnInit(): void {
    this.lineChartData = LineChartData;
    this.lineChartLabels = LineChartLabels;
    this.lineChartColors = LineChartColors;
  }

}
