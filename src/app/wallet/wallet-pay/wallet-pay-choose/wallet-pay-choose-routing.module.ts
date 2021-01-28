import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletPayChoosePage } from './wallet-pay-choose.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPayChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPayChoosePageRoutingModule {}
