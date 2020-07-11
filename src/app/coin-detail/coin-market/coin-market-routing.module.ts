import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinMarketPage } from './coin-market.page';

const routes: Routes = [
  {
    path: '',
    component: CoinMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinMarketPageRoutingModule {}
