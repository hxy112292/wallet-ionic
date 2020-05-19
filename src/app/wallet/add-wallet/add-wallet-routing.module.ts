import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWalletPage } from './add-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: AddWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWalletPageRoutingModule {}
