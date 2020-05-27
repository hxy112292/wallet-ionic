import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletContactAddPage } from './wallet-contact-add.page';

const routes: Routes = [
  {
    path: '',
    component: WalletContactAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletContactAddPageRoutingModule {}
