import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthPayPageRoutingModule } from './wallet-eth-pay-routing.module';

import { WalletEthPayPage } from './wallet-eth-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthPayPageRoutingModule
  ],
  declarations: [WalletEthPayPage]
})
export class WalletEthPayPageModule {}
