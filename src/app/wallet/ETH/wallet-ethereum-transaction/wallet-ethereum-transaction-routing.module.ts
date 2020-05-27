import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthereumTransactionPage } from './wallet-ethereum-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthereumTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthereumTransactionPageRoutingModule {}
