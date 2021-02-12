import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorBlockchainUserAddrAddPage } from './monitor-blockchain-user-addr-add.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorBlockchainUserAddrAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorBlockchainUserAddrAddPageRoutingModule {}
