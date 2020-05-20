import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletAddChoosePage } from './wallet-add-choose.page';

const routes: Routes = [
  {
    path: '',
    component: WalletAddChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletAddChoosePageRoutingModule {}
