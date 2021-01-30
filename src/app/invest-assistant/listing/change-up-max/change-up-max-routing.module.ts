import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeUpMaxPage } from './change-up-max.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeUpMaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeUpMaxPageRoutingModule {}
