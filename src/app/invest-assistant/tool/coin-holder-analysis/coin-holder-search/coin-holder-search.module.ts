import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinHolderSearchPageRoutingModule } from './coin-holder-search-routing.module';

import { CoinHolderSearchPage } from './coin-holder-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinHolderSearchPageRoutingModule
  ],
  declarations: [CoinHolderSearchPage]
})
export class CoinHolderSearchPageModule {}
