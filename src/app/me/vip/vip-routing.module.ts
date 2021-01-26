import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipPage } from './vip.page';

const routes: Routes = [
  {
    path: '',
    component: VipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VipPageRoutingModule {}
