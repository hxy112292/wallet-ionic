import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBitcoinSendPageRoutingModule } from './wallet-bitcoin-send-routing.module';

import { WalletBitcoinSendPage } from './wallet-bitcoin-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBitcoinSendPageRoutingModule
  ],
  declarations: [WalletBitcoinSendPage]
})
export class WalletBitcoinSendPageModule {}
