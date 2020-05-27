import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletLitecoinSendPageRoutingModule } from './wallet-litecoin-send-routing.module';

import { WalletLitecoinSendPage } from './wallet-litecoin-send.page';
import {WalletContactChoosePageModule} from '../wallet-contact-choose/wallet-contact-choose.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletLitecoinSendPageRoutingModule,
    WalletContactChoosePageModule
  ],
  declarations: [WalletLitecoinSendPage]
})
export class WalletLitecoinSendPageModule {}
