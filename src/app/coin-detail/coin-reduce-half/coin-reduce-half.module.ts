import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinReduceHalfPageRoutingModule } from './coin-reduce-half-routing.module';

import { CoinReduceHalfPage } from './coin-reduce-half.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinReduceHalfPageRoutingModule
  ],
  exports: [
    CoinReduceHalfPage
  ],
  declarations: [CoinReduceHalfPage]
})
export class CoinReduceHalfPageModule {}
