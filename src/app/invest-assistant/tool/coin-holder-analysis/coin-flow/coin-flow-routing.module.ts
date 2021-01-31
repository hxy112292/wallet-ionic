import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinFlowPage } from './coin-flow.page';

const routes: Routes = [
  {
    path: '',
    component: CoinFlowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinFlowPageRoutingModule {}
