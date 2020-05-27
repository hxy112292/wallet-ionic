import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeDescPage } from './exchange-desc.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeDescPageRoutingModule {}
