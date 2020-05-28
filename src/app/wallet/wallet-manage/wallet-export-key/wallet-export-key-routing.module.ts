import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletExportKeyPage } from './wallet-export-key.page';

const routes: Routes = [
  {
    path: '',
    component: WalletExportKeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletExportKeyPageRoutingModule {}
