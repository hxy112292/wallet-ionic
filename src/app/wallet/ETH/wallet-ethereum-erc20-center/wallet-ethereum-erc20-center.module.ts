import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthereumErc20CenterPageRoutingModule } from './wallet-ethereum-erc20-center-routing.module';

import { WalletEthereumErc20CenterPage } from './wallet-ethereum-erc20-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthereumErc20CenterPageRoutingModule
  ],
  declarations: [WalletEthereumErc20CenterPage]
})
export class WalletEthereumErc20CenterPageModule {}
