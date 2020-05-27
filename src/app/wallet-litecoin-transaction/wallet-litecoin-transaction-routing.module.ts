import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletLitecoinTransactionPage } from './wallet-litecoin-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: WalletLitecoinTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletLitecoinTransactionPageRoutingModule {}
