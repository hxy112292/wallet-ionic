import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorBlockchainSystemPage } from './monitor-blockchain-system.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorBlockchainSystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorBlockchainSystemPageRoutingModule {}
