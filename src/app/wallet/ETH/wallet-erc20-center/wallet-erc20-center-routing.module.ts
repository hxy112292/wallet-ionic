import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20CenterPage } from './wallet-erc20-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20CenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20CenterPageRoutingModule {}
