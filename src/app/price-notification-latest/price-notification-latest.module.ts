import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceNotificationLatestPageRoutingModule } from './price-notification-latest-routing.module';

import { PriceNotificationLatestPage } from './price-notification-latest.page';
import {AddMonitorPricePageModule} from './add-monitor-price/add-monitor-price.module';
import {UpdateMonitorPricePageModule} from './update-monitor-price/update-monitor-price.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddMonitorPricePageModule,
        UpdateMonitorPricePageModule,
        PriceNotificationLatestPageRoutingModule
    ],
    exports: [
        PriceNotificationLatestPage
    ],
    declarations: [PriceNotificationLatestPage]
})
export class PriceNotificationLatestPageModule {}
