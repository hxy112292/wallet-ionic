import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletLitecoinReceivePage } from './wallet-litecoin-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletLitecoinReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletLitecoinReceivePageRoutingModule {}
