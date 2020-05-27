import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletMnemonicImportPageRoutingModule } from './wallet-mnemonic-import-routing.module';

import { WalletMnemonicImportPage } from './wallet-mnemonic-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletMnemonicImportPageRoutingModule
  ],
  declarations: [WalletMnemonicImportPage]
})
export class WalletMnemonicImportPageModule {}
