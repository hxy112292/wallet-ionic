import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorBlockchainUserPage } from './monitor-blockchain-user.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorBlockchainUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorBlockchainUserPageRoutingModule {}
