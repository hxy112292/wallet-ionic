import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotWebPage } from './hot-web.page';

const routes: Routes = [
  {
    path: '',
    component: HotWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotWebPageRoutingModule {}
