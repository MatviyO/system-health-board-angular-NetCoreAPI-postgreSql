import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectionSaleComponent} from './sections/section-sale/section-sale.component';
import {SectionOrdersComponent} from './sections/section-orders/section-orders.component';
import {SectionHealthComponent} from './sections/section-health/section-health.component';

const routes: Routes = [
  {path: 'sales', component: SectionSaleComponent},
  {path: 'orders', component: SectionOrdersComponent},
  {path: 'health', component: SectionHealthComponent},
  {path: '', redirectTo: '/sales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
