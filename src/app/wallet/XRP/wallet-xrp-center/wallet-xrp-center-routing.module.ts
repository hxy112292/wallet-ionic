import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletXrpCenterPage } from './wallet-xrp-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletXrpCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletXrpCenterPageRoutingModule {}
