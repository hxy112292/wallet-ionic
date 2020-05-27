import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinSearchPageRoutingModule } from './coin-search-routing.module';

import { CoinSearchPage } from './coin-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinSearchPageRoutingModule
  ],
  declarations: [CoinSearchPage]
})
export class CoinSearchPageModule {}
