import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotCoinPage } from './hot-coin.page';

const routes: Routes = [
  {
    path: '',
    component: HotCoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotCoinPageRoutingModule {}
