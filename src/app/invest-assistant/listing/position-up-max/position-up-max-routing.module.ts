import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PositionUpMaxPage } from './position-up-max.page';

const routes: Routes = [
  {
    path: '',
    component: PositionUpMaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionUpMaxPageRoutingModule {}
