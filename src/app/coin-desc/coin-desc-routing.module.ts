import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinDescPage } from './coin-desc.page';

const routes: Routes = [
  {
    path: '',
    component: CoinDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinDescPageRoutingModule {}
