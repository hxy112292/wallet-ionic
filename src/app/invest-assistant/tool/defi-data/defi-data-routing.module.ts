import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefiDataPage } from './defi-data.page';

const routes: Routes = [
  {
    path: '',
    component: DefiDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefiDataPageRoutingModule {}
