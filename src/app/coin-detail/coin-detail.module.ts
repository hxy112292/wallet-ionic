import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinDetailPageRoutingModule } from './coin-detail-routing.module';

import { CoinDetailPage } from './coin-detail.page';
import {CoinDescPageModule} from './coin-desc/coin-desc.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinDetailPageRoutingModule,
    CoinDescPageModule
  ],
  declarations: [CoinDetailPage]
})
export class CoinDetailPageModule {}
