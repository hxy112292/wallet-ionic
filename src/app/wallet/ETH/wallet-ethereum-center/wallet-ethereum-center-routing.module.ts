import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthereumCenterPage } from './wallet-ethereum-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthereumCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthereumCenterPageRoutingModule {}
