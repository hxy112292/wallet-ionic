import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinNewsDetailPageRoutingModule } from './coin-news-detail-routing.module';

import { CoinNewsDetailPage } from './coin-news-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinNewsDetailPageRoutingModule
  ],
  declarations: [CoinNewsDetailPage]
})
export class CoinNewsDetailPageModule {}
