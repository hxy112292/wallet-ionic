import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnoverPage } from './turnover.page';

const routes: Routes = [
  {
    path: '',
    component: TurnoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnoverPageRoutingModule {}
