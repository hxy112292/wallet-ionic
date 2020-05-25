import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubPage } from './github.page';

const routes: Routes = [
  {
    path: '',
    component: GithubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubPageRoutingModule {}
