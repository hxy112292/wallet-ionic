import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletMnemonicPasswordPage } from './wallet-mnemonic-password.page';

const routes: Routes = [
  {
    path: '',
    component: WalletMnemonicPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletMnemonicPasswordPageRoutingModule {}
