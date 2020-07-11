import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinMarketPageRoutingModule } from './coin-market-routing.module';

import { CoinMarketPage } from './coin-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinMarketPageRoutingModule
  ],
  exports: [
    CoinMarketPage
  ],
  declarations: [CoinMarketPage]
})
export class CoinMarketPageModule {}
