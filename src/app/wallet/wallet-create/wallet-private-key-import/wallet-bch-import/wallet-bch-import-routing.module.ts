import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBchImportPage } from './wallet-bch-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBchImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBchImportPageRoutingModule {}
