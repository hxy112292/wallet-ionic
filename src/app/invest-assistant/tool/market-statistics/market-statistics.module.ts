import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketStatisticsPageRoutingModule } from './market-statistics-routing.module';

import { MarketStatisticsPage } from './market-statistics.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MarketStatisticsPageRoutingModule
    ],
  declarations: [MarketStatisticsPage]
})
export class MarketStatisticsPageModule {}
