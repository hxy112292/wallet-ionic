import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletMnemonicConfirmPageRoutingModule } from './wallet-mnemonic-confirm-routing.module';

import { WalletMnemonicConfirmPage } from './wallet-mnemonic-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletMnemonicConfirmPageRoutingModule
  ],
  declarations: [WalletMnemonicConfirmPage]
})
export class WalletMnemonicConfirmPageModule {}
