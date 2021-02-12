import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorBlockchainUserAddrPage } from './monitor-blockchain-user-addr.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorBlockchainUserAddrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorBlockchainUserAddrPageRoutingModule {}
