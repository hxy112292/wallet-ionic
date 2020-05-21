import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBitcoinCenterPageRoutingModule } from './wallet-bitcoin-center-routing.module';

import { WalletBitcoinCenterPage } from './wallet-bitcoin-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBitcoinCenterPageRoutingModule
  ],
  declarations: [WalletBitcoinCenterPage]
})
export class WalletBitcoinCenterPageModule {}
