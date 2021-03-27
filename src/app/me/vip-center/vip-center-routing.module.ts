import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipCenterPage } from './vip-center.page';

const routes: Routes = [
  {
    path: '',
    component: VipCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VipCenterPageRoutingModule {}
