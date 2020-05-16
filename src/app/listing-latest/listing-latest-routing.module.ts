import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingLatestPage } from './listing-latest.page';

const routes: Routes = [
  {
    path: '',
    component: ListingLatestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingLatestPageRoutingModule {}
