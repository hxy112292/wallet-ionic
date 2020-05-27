import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBchSendPage } from './wallet-bch-send.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBchSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBchSendPageRoutingModule {}
