import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketCurrencyPageRoutingModule } from './market-currency-routing.module';

import { MarketCurrencyPage } from './market-currency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketCurrencyPageRoutingModule
  ],
  declarations: [MarketCurrencyPage]
})
export class MarketCurrencyPageModule {}
