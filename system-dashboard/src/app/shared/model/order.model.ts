import {Customer} from './customer.model';

export interface Order {
  id: number;
  customer: Customer;
  total: number;
  placed: Date;
  fullfield: Date;
}
