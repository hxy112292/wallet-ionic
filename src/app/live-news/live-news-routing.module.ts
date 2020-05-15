import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveNewsPage } from './live-news.page';

const routes: Routes = [
  {
    path: '',
    component: LiveNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveNewsPageRoutingModule {}
