import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletErc20ManagePage } from './wallet-erc20-manage.page';

const routes: Routes = [
  {
    path: '',
    component: WalletErc20ManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletErc20ManagePageRoutingModule {}
