import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeepNewsPage } from './deep-news.page';

const routes: Routes = [
  {
    path: '',
    component: DeepNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeepNewsPageRoutingModule {}
