import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletMnemonicConfirmPage } from './wallet-mnemonic-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletMnemonicConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletMnemonicConfirmPageRoutingModule {}
