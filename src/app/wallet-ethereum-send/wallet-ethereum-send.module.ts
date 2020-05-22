import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthereumSendPageRoutingModule } from './wallet-ethereum-send-routing.module';

import { WalletEthereumSendPage } from './wallet-ethereum-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthereumSendPageRoutingModule
  ],
  declarations: [WalletEthereumSendPage]
})
export class WalletEthereumSendPageModule {}
