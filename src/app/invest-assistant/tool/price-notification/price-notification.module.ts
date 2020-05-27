import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceNotificationPageRoutingModule } from './price-notification-routing.module';

import { PriceNotificationPage } from './price-notification.page';
import {PriceNotificationLatestPageModule} from './price-notification-latest/price-notification-latest.module';
import {PriceNotificationHistoryPageModule} from './price-notification-history/price-notification-history.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PriceNotificationPageRoutingModule,
        PriceNotificationLatestPageModule,
        PriceNotificationHistoryPageModule
    ],
  declarations: [PriceNotificationPage]
})
export class PriceNotificationPageModule {}
