import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20AddPage } from './wallet-erc20-add.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20AddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20AddPageRoutingModule {}
