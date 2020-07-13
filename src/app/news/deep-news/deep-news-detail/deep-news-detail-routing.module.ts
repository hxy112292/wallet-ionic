import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeepNewsDetailPage } from './deep-news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DeepNewsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeepNewsDetailPageRoutingModule {}
