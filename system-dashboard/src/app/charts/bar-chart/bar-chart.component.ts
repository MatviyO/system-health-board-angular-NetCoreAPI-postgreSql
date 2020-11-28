import {Component, OnInit} from '@angular/core';
import {SalesDataService} from '../../services/sales-data.service';
import * as moment from 'moment';
// const BarChartData: any[] = [
//   {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
//   {data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales'}
// ];
// const BarChartLabels: string[] = [
//   'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'
// ];

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

  constructor(private salesService: SalesDataService) {
  }
  orders; an;
  orderLabels: string[];
  orderData: number[];

  ngOnInit(): void {
    this.salesService.getOrders(1, 100)
      .subscribe(res => {
        const localChartData = this.getChartData(res);
        this.barChartLabels = localChartData.map(x => x[0]).reserve();
        this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Sales'}];
      });
  }

  getChartData(res: Response): any {
    this.orders = res['page']['data'];
    const data = this.orders.map(o => o.total);

    const formattedOrderss = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    const p = [];
    const chartData = formattedOrderss.reduce((r, e) => {
      const key = e[0];
      if ( !p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;
  }

}
