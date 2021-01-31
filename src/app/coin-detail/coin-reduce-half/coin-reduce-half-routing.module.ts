import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinReduceHalfPage } from './coin-reduce-half.page';

const routes: Routes = [
  {
    path: '',
    component: CoinReduceHalfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinReduceHalfPageRoutingModule {}
