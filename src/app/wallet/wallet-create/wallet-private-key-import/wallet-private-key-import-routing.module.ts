import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletPrivateKeyImportPage } from './wallet-private-key-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPrivateKeyImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPrivateKeyImportPageRoutingModule {}
