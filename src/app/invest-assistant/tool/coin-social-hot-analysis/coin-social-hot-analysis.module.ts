import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinSocialHotAnalysisPageRoutingModule } from './coin-social-hot-analysis-routing.module';

import { CoinSocialHotAnalysisPage } from './coin-social-hot-analysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinSocialHotAnalysisPageRoutingModule
  ],
  declarations: [CoinSocialHotAnalysisPage]
})
export class CoinSocialHotAnalysisPageModule {}
