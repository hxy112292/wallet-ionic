import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletContactChoosePageRoutingModule } from './wallet-contact-choose-routing.module';

import { WalletContactChoosePage } from './wallet-contact-choose.page';
import {WalletContactAddPageModule} from '../wallet-contact-add/wallet-contact-add.module';
import {WalletContactEditPageModule} from '../wallet-contact-edit/wallet-contact-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletContactChoosePageRoutingModule,
    WalletContactAddPageModule,
    WalletContactEditPageModule
  ],
  declarations: [WalletContactChoosePage]
})
export class WalletContactChoosePageModule {}
