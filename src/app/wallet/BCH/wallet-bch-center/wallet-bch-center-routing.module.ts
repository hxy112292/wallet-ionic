import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBchCenterPage } from './wallet-bch-center.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBchCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBchCenterPageRoutingModule {}
