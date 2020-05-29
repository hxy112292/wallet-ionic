import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletXrpReceivePage } from './wallet-xrp-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletXrpReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletXrpReceivePageRoutingModule {}
