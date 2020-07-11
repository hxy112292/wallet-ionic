import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinIntroductionPageRoutingModule } from './coin-introduction-routing.module';

import { CoinIntroductionPage } from './coin-introduction.page';
import {CoinDescPageModule} from './coin-desc/coin-desc.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinIntroductionPageRoutingModule,
    CoinDescPageModule
  ],
  exports: [
    CoinIntroductionPage
  ],
  declarations: [CoinIntroductionPage]
})
export class CoinIntroductionPageModule {}
