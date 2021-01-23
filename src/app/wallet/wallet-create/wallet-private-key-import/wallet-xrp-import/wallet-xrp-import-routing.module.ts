import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletXrpImportPage } from './wallet-xrp-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletXrpImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletXrpImportPageRoutingModule {}
