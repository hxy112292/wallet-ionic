import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBtcImportPage } from './wallet-btc-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBtcImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBtcImportPageRoutingModule {}
