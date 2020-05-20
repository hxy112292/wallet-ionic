import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletMnemonicGeneratePage } from './wallet-mnemonic-generate.page';

const routes: Routes = [
  {
    path: '',
    component: WalletMnemonicGeneratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletMnemonicGeneratePageRoutingModule {}
