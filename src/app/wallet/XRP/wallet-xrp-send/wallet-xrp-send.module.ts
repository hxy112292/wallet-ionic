import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletXrpSendPageRoutingModule } from './wallet-xrp-send-routing.module';

import { WalletXrpSendPage } from './wallet-xrp-send.page';
import {WalletContactChoosePageModule} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletXrpSendPageRoutingModule,
    WalletContactChoosePageModule
  ],
  declarations: [WalletXrpSendPage]
})
export class WalletXrpSendPageModule {}
