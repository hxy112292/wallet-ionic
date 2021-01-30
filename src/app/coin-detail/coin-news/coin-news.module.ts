import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinNewsPageRoutingModule } from './coin-news-routing.module';

import { CoinNewsPage } from './coin-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinNewsPageRoutingModule
  ],
  exports: [
    CoinNewsPage
  ],
  declarations: [CoinNewsPage]
})
export class CoinNewsPageModule {}
