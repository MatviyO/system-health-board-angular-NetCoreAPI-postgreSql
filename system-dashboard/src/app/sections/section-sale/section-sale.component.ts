import { Component, OnInit } from '@angular/core';
import {SalesDataService} from '../../services/sales-data.service';

@Component({
  selector: 'app-section-sale',
  templateUrl: './section-sale.component.html',
  styleUrls: ['./section-sale.component.css']
})
export class SectionSaleComponent implements OnInit {

  salesDataByCustomer: any;
  salesDataByState: any;
  constructor(private salesService: SalesDataService) { }

  ngOnInit(): void {
    this.salesService.getOrdersByState().subscribe(res => {
      this.salesDataByState = res;
    });
    this.salesService.getOrdersByCustomer(5).subscribe(res => {
      this.salesDataByCustomer = res;
    });

  }

}
