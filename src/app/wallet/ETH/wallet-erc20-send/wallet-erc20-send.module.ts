import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20SendPageRoutingModule } from './wallet-erc20-send-routing.module';

import { WalletErc20SendPage } from './wallet-erc20-send.page';
import {WalletContactChoosePageModule} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20SendPageRoutingModule,
    WalletContactChoosePageModule
  ],
  declarations: [WalletErc20SendPage]
})
export class WalletErc20SendPageModule {}
