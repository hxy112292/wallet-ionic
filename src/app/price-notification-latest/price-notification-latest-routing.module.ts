import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceNotificationLatestPage } from './price-notification-latest.page';

const routes: Routes = [
  {
    path: '',
    component: PriceNotificationLatestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceNotificationLatestPageRoutingModule {}
