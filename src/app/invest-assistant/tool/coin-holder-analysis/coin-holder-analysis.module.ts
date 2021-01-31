import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinHolderAnalysisPageRoutingModule } from './coin-holder-analysis-routing.module';

import { CoinHolderAnalysisPage } from './coin-holder-analysis.page';
import {CoinFlowPageModule} from './coin-flow/coin-flow.module';
import {CoinHolderPageModule} from './coin-holder/coin-holder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinHolderAnalysisPageRoutingModule,
    CoinFlowPageModule,
    CoinHolderPageModule
  ],
  declarations: [CoinHolderAnalysisPage]
})
export class CoinHolderAnalysisPageModule {}
