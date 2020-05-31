import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20TransactionPage } from './wallet-erc20-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20TransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20TransactionPageRoutingModule {}
