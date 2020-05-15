import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorBlockchainPage } from './monitor-blockchain.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorBlockchainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorBlockchainPageRoutingModule {}
