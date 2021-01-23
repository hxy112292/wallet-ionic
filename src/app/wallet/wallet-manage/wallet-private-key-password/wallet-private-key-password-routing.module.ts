import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletPrivateKeyPasswordPage } from './wallet-private-key-password.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPrivateKeyPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPrivateKeyPasswordPageRoutingModule {}
