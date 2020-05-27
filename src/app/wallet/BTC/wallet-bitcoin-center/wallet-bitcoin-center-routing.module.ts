import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBitcoinCenterPage } from './wallet-bitcoin-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBitcoinCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBitcoinCenterPageRoutingModule {}
