import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletContactEditPage } from './wallet-contact-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WalletContactEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletContactEditPageRoutingModule {}
