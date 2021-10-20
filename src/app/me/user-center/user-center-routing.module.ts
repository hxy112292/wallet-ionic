import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCenterPage } from './user-center.page';

const routes: Routes = [
  {
    path: '',
    component: UserCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCenterPageRoutingModule {}
