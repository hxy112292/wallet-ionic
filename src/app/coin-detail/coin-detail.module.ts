import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinDetailPageRoutingModule } from './coin-detail-routing.module';

import { CoinDetailPage } from './coin-detail.page';
import {CoinDescPageModule} from './coin-introduction/coin-desc/coin-desc.module';
import {CoinIntroductionPageModule} from './coin-introduction/coin-introduction.module';
import {CoinMarketPageModule} from './coin-market/coin-market.module';
import {CoinFlowPageModule} from './coin-flow/coin-flow.module';
import {CoinHolderPageModule} from './coin-holder/coin-holder.module';
import {CoinHotSocialPageModule} from './coin-hot-social/coin-hot-social.module';
import {CoinNewsPageModule} from './coin-news/coin-news.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoinDetailPageRoutingModule,
        CoinDescPageModule,
        CoinIntroductionPageModule,
        CoinMarketPageModule,
        CoinFlowPageModule,
        CoinHolderPageModule,
        CoinHotSocialPageModule,
        CoinNewsPageModule
    ],
  declarations: [CoinDetailPage]
})
export class CoinDetailPageModule {}
