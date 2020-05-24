import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletContactChoosePageRoutingModule } from './wallet-contact-choose-routing.module';

import { WalletContactChoosePage } from './wallet-contact-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletContactChoosePageRoutingModule
  ],
  declarations: [WalletContactChoosePage]
})
export class WalletContactChoosePageModule {}
