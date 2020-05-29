import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletXrpSendPage } from './wallet-xrp-send.page';

const routes: Routes = [
  {
    path: '',
    component: WalletXrpSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletXrpSendPageRoutingModule {}
