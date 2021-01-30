import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeVolPage } from './change-vol.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeVolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeVolPageRoutingModule {}
