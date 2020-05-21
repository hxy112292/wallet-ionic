import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthereumCenterPageRoutingModule } from './wallet-ethereum-center-routing.module';

import { WalletEthereumCenterPage } from './wallet-ethereum-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthereumCenterPageRoutingModule
  ],
  declarations: [WalletEthereumCenterPage]
})
export class WalletEthereumCenterPageModule {}
