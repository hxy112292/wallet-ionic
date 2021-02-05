import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefiEthDataPage } from './defi-eth-data.page';

const routes: Routes = [
  {
    path: '',
    component: DefiEthDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefiEthDataPageRoutingModule {}
