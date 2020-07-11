import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinDetailPageRoutingModule } from './coin-detail-routing.module';

import { CoinDetailPage } from './coin-detail.page';
import {CoinDescPageModule} from './coin-introduction/coin-desc/coin-desc.module';
import {CoinIntroductionPageModule} from './coin-introduction/coin-introduction.module';
import {CoinMarketPageModule} from './coin-market/coin-market.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoinDetailPageRoutingModule,
        CoinDescPageModule,
        CoinIntroductionPageModule,
        CoinMarketPageModule
    ],
  declarations: [CoinDetailPage]
})
export class CoinDetailPageModule {}
