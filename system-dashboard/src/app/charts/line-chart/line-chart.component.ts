import {Component, OnInit} from '@angular/core';
import {LineChartColors} from '../../shared/chart.colors';
import {SalesDataService} from '../../services/sales-data.service';
import moment = require('moment');

// const LineChartData: any[] = [
//   {data: [65, 59, 80, 81, 56, 54], label: 'Sentiment Analysis'},
//   {data: [25, 39, 60, 91, 36, 54], label: 'Image Recognition'},
//   {data: [25, 39, 60, 91, 36, 54], label: 'Forcasting'}
//
//   ];
// const LineChartLabels: string[] = [
//   'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
// ];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  topCustomers: string[];
  allOrders: any[];

  lineChartData: any[];
  lineChartLabels: string[];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: any[];
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private saleService: SalesDataService) {
  }

  ngOnInit(): void {
    this.saleService.getOrders(1, 100)
      .subscribe(res => {
        this.allOrders = res['page']['data'];

        this.saleService.getOrdersByCustomer(3).subscribe(cus => {
          this.topCustomers = cus.map(x => x['name']);

          const allChartData = this.topCustomers.reduce((result, i) => {
            result.push(this.getChartData(this.allOrders, i));
            return result;
          }, []);

          let dates = allChartData.map(x => x['data']).reduce((a, i) => {
            a.push(i.map(o => new Date(o[0])));
          }, []);
          dates = [].concat.apply([], dates);

          const r = this.getCustomerOrderByDate(allChartData, dates);
        });
      });
  }

  getChartData(allOrders: any, name: string): any {
    const customerOrders = allOrders.filter(o => o.customer.name === name);

    const formattedOrders = customerOrders.reduce((r, e) => {
      r.push([e.placed, e.total]);
    }, []);

    const result = {customer: name, data: formattedOrders};

    return result;
  }

  getCustomerOrderByDate(orders: any, dates: any): any {
    const customers = this.topCustomers;
    const prettyDates = dates.map(x => this.toFriendlyDate(x));
    const u = Array.from(new Set(prettyDates)).sort();
  }

  toFriendlyDate(date: Date): any {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

}
