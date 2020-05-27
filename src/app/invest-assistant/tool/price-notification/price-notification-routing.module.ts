import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceNotificationPage } from './price-notification.page';

const routes: Routes = [
  {
    path: '',
    component: PriceNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceNotificationPageRoutingModule {}
