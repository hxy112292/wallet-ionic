import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBitcoinReceivePage } from './wallet-bitcoin-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBitcoinReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBitcoinReceivePageRoutingModule {}
