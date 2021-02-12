import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorBlockchainUserAddrUpdatePage } from './monitor-blockchain-user-addr-update.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorBlockchainUserAddrUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorBlockchainUserAddrUpdatePageRoutingModule {}
