import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletContactChoosePage } from './wallet-contact-choose.page';

const routes: Routes = [
  {
    path: '',
    component: WalletContactChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletContactChoosePageRoutingModule {}
