import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressUpMaxPage } from './address-up-max.page';

const routes: Routes = [
  {
    path: '',
    component: AddressUpMaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressUpMaxPageRoutingModule {}
