import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20ReceivePage } from './wallet-erc20-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20ReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20ReceivePageRoutingModule {}
