import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceNotificationPageRoutingModule } from './price-notification-routing.module';

import { PriceNotificationPage } from './price-notification.page';
import {AddMonitorPricePageModule} from './add-monitor-price/add-monitor-price.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriceNotificationPageRoutingModule,
    AddMonitorPricePageModule
  ],
  declarations: [PriceNotificationPage]
})
export class PriceNotificationPageModule {}
