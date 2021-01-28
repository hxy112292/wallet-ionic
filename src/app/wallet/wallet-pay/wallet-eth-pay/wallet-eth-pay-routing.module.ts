import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthPayPage } from './wallet-eth-pay.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthPayPageRoutingModule {}
