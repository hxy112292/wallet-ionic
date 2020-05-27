import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMonitorPricePageRoutingModule } from './update-monitor-price-routing.module';

import { UpdateMonitorPricePage } from './update-monitor-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMonitorPricePageRoutingModule
  ],
  declarations: [UpdateMonitorPricePage]
})
export class UpdateMonitorPricePageModule {}
