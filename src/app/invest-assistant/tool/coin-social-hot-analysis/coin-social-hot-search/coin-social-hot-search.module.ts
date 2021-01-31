import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinSocialHotSearchPageRoutingModule } from './coin-social-hot-search-routing.module';

import { CoinSocialHotSearchPage } from './coin-social-hot-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinSocialHotSearchPageRoutingModule
  ],
  declarations: [CoinSocialHotSearchPage]
})
export class CoinSocialHotSearchPageModule {}
