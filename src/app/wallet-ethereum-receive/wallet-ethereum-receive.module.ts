import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthereumReceivePageRoutingModule } from './wallet-ethereum-receive-routing.module';

import { WalletEthereumReceivePage } from './wallet-ethereum-receive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthereumReceivePageRoutingModule
  ],
  declarations: [WalletEthereumReceivePage]
})
export class WalletEthereumReceivePageModule {}
