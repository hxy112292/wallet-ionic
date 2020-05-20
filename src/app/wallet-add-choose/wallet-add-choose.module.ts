import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletAddChoosePageRoutingModule } from './wallet-add-choose-routing.module';

import { WalletAddChoosePage } from './wallet-add-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletAddChoosePageRoutingModule
  ],
  declarations: [WalletAddChoosePage]
})
export class WalletAddChoosePageModule {}
