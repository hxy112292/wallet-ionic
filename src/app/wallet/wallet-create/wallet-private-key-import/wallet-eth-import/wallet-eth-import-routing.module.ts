import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletEthImportPage } from './wallet-eth-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletEthImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletEthImportPageRoutingModule {}
