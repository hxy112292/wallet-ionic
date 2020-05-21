import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBitcoinTransactionPage } from './wallet-bitcoin-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBitcoinTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBitcoinTransactionPageRoutingModule {}
