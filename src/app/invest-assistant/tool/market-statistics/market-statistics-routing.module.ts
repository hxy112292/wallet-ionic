import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketStatisticsPage } from './market-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: MarketStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketStatisticsPageRoutingModule {}
