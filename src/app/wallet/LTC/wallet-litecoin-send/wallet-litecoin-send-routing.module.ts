import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletLitecoinSendPage } from './wallet-litecoin-send.page';

const routes: Routes = [
  {
    path: '',
    component: WalletLitecoinSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletLitecoinSendPageRoutingModule {}
