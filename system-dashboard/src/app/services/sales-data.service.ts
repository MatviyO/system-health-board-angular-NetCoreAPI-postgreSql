import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SalesDataService {

  constructor(private http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number): any {
    return this.http.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize)
      .pipe(map(res => res.json()));
  }

  getOrdersByCustomer(n: number): any {
    return this.http.get('http://localhost:5000/api/order/bycustomer/' + n)
      .pipe(map(res => res.json()));
  }

  getOrdersByState(): any {
    return this.http.get('http://localhost:5000/api/order/bystate/')
      .pipe(map(res => res.json()));
  }
}
