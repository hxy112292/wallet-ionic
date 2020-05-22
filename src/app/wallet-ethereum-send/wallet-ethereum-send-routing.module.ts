import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthereumSendPage } from './wallet-ethereum-send.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthereumSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthereumSendPageRoutingModule {}
