import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBchSendPageRoutingModule } from './wallet-bch-send-routing.module';

import { WalletBchSendPage } from './wallet-bch-send.page';
import {WalletContactChoosePageModule} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBchSendPageRoutingModule,
    WalletContactChoosePageModule
  ],
  declarations: [WalletBchSendPage]
})
export class WalletBchSendPageModule {}
