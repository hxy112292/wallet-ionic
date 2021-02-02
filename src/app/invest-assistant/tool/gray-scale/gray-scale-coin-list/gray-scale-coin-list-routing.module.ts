import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrayScaleCoinListPage } from './gray-scale-coin-list.page';

const routes: Routes = [
  {
    path: '',
    component: GrayScaleCoinListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrayScaleCoinListPageRoutingModule {}
