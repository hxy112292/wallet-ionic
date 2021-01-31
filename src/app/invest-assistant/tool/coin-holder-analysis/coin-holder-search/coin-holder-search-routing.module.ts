import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinHolderSearchPage } from './coin-holder-search.page';

const routes: Routes = [
  {
    path: '',
    component: CoinHolderSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinHolderSearchPageRoutingModule {}
