import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinNewsPage } from './coin-news.page';

const routes: Routes = [
  {
    path: '',
    component: CoinNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinNewsPageRoutingModule {}
