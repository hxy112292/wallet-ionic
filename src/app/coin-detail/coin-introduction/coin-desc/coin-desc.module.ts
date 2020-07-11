import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinDescPageRoutingModule } from './coin-desc-routing.module';

import { CoinDescPage } from './coin-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinDescPageRoutingModule
  ],
  declarations: [CoinDescPage]
})
export class CoinDescPageModule {}
