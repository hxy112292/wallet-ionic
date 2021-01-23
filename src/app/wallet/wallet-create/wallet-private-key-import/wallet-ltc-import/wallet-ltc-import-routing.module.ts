import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletLtcImportPage } from './wallet-ltc-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletLtcImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletLtcImportPageRoutingModule {}
