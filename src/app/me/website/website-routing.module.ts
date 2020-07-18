import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsitePage } from './website.page';

const routes: Routes = [
  {
    path: '',
    component: WebsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsitePageRoutingModule {}
