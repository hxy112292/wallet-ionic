import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinSocialHotSearchPage } from './coin-social-hot-search.page';

const routes: Routes = [
  {
    path: '',
    component: CoinSocialHotSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinSocialHotSearchPageRoutingModule {}
