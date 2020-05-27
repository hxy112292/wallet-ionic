import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceNotificationHistoryPage } from './price-notification-history.page';

const routes: Routes = [
  {
    path: '',
    component: PriceNotificationHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceNotificationHistoryPageRoutingModule {}
