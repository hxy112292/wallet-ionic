import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserOpenDetailPage } from './user-open-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UserOpenDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOpenDetailPageRoutingModule {}
