import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletMnemonicPasswordPageRoutingModule } from './wallet-mnemonic-password-routing.module';

import { WalletMnemonicPasswordPage } from './wallet-mnemonic-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletMnemonicPasswordPageRoutingModule
  ],
  declarations: [WalletMnemonicPasswordPage]
})
export class WalletMnemonicPasswordPageModule {}
