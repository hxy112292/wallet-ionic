import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletContactPage } from './wallet-contact.page';

const routes: Routes = [
  {
    path: '',
    component: WalletContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletContactPageRoutingModule {}
