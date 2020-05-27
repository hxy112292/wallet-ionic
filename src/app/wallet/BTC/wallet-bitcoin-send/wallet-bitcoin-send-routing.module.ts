import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBitcoinSendPage } from './wallet-bitcoin-send.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBitcoinSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBitcoinSendPageRoutingModule {}
