import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletMnemonicImportPage } from './wallet-mnemonic-import.page';

const routes: Routes = [
  {
    path: '',
    component: WalletMnemonicImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletMnemonicImportPageRoutingModule {}
