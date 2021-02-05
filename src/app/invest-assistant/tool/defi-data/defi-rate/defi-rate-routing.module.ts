import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefiRatePage } from './defi-rate.page';

const routes: Routes = [
  {
    path: '',
    component: DefiRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefiRatePageRoutingModule {}
