import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthereumReceivePage } from './wallet-ethereum-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthereumReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthereumReceivePageRoutingModule {}
