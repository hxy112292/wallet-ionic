import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinDetailPage } from './coin-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CoinDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinDetailPageRoutingModule {}
