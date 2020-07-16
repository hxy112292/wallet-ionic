import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketCurrencyPage } from './market-currency.page';

const routes: Routes = [
  {
    path: '',
    component: MarketCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketCurrencyPageRoutingModule {}
