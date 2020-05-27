import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletLitecoinCenterPage } from './wallet-litecoin-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletLitecoinCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletLitecoinCenterPageRoutingModule {}
