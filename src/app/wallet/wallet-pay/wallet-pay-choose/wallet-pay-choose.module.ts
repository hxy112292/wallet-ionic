import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPayChoosePageRoutingModule } from './wallet-pay-choose-routing.module';

import { WalletPayChoosePage } from './wallet-pay-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPayChoosePageRoutingModule
  ],
  declarations: [WalletPayChoosePage]
})
export class WalletPayChoosePageModule {}
