import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefiMiningListPage } from './defi-mining-list.page';

const routes: Routes = [
  {
    path: '',
    component: DefiMiningListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefiMiningListPageRoutingModule {}
