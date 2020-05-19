import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMonitorPricePage } from './add-monitor-price.page';

const routes: Routes = [
  {
    path: '',
    component: AddMonitorPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMonitorPricePageRoutingModule {}
