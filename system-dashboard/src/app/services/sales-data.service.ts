import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SalesDataService {

  private readonly url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number): any {
    return this.http.get(`${this.url}order/` + pageIndex + '/' + pageSize)
      .pipe(map((res: Response) => res.json()));
  }

  getOrdersByCustomer(n: number): any {
    return this.http.get(`${this.url}order/bycustomer/` + n)
      .pipe(map((res: Response) => res.json()));
  }

  getOrdersByState(): any {
    return this.http.get(`${this.url}order/bystate/`)
      .pipe(map((res: Response) => res.json()));
  }
}
