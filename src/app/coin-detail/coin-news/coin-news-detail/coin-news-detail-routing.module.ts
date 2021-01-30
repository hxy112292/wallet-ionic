import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinNewsDetailPage } from './coin-news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CoinNewsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinNewsDetailPageRoutingModule {}
