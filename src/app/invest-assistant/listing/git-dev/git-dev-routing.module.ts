import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitDevPage } from './git-dev.page';

const routes: Routes = [
  {
    path: '',
    component: GitDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitDevPageRoutingModule {}
