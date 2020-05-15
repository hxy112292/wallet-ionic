import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxDetailPage } from './tx-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TxDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxDetailPageRoutingModule {}
