import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBchReceivePage } from './wallet-bch-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBchReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBchReceivePageRoutingModule {}
