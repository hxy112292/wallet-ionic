import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletMnemonicGeneratePageRoutingModule } from './wallet-mnemonic-generate-routing.module';

import { WalletMnemonicGeneratePage } from './wallet-mnemonic-generate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletMnemonicGeneratePageRoutingModule
  ],
  declarations: [WalletMnemonicGeneratePage]
})
export class WalletMnemonicGeneratePageModule {}
