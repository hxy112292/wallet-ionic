import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletXrpTransactionPage } from './wallet-xrp-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: WalletXrpTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletXrpTransactionPageRoutingModule {}
