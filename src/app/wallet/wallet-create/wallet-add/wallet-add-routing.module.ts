import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletAddPage } from './wallet-add.page';

const routes: Routes = [
  {
    path: '',
    component: WalletAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletAddPageRoutingModule {}
