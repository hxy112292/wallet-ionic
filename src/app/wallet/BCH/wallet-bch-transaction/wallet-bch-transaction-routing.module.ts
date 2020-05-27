import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBchTransactionPage } from './wallet-bch-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBchTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBchTransactionPageRoutingModule {}
