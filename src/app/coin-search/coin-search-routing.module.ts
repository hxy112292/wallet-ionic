import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinSearchPage } from './coin-search.page';

const routes: Routes = [
  {
    path: '',
    component: CoinSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinSearchPageRoutingModule {}
