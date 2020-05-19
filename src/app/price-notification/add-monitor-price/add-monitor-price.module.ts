import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMonitorPricePageRoutingModule } from './add-monitor-price-routing.module';

import { AddMonitorPricePage } from './add-monitor-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMonitorPricePageRoutingModule
  ],
  declarations: [AddMonitorPricePage]
})
export class AddMonitorPricePageModule {}
