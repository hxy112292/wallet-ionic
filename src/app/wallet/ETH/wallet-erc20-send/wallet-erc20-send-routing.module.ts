import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20SendPage } from './wallet-erc20-send.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20SendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20SendPageRoutingModule {}
