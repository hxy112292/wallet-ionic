import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthereumErc20CenterPage } from './wallet-ethereum-erc20-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthereumErc20CenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthereumErc20CenterPageRoutingModule {}
