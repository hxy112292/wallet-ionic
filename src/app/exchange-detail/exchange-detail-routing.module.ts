import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeDetailPage } from './exchange-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeDetailPageRoutingModule {}
