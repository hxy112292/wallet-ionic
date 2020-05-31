import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20SearchPage } from './wallet-erc20-search.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20SearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20SearchPageRoutingModule {}
