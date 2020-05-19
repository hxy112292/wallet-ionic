import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMonitorPricePage } from './update-monitor-price.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMonitorPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMonitorPricePageRoutingModule {}
