import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletExportMnemonicPage } from './wallet-export-mnemonic.page';

const routes: Routes = [
  {
    path: '',
    component: WalletExportMnemonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletExportMnemonicPageRoutingModule {}
