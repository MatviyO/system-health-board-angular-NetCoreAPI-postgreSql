import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/model/order.model';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {
  orders: Order[] = [
    {id: 1, customer: {id: 1, name: 'MAks', state: 'CO', email: '123@gmail.com'}, total: 230, placed: new Date(), fullfield: new Date()},
    {id: 2, customer: {id: 2, name: 'Leno', state: 'CO', email: '1fdg23@gmail.com'}, total: 2330, placed: new Date(), fullfield: new Date()},
    {id: 3, customer: {id: 3, name: 'Fiii', state: 'CO', email: '1sdf23@gmail.com'}, total: 24430, placed: new Date(), fullfield: new Date()},
    {id: 4, customer: {id: 4, name: 'Liii', state: 'CO', email: '1dfs23@gmail.com'}, total: 23450, placed: new Date(), fullfield: new Date()},
    {id: 5, customer: {id: 5, name: 'SEEE', state: 'CO', email: '12gdf3@gmail.com'}, total: 25430, placed: new Date(), fullfield: new Date()},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
