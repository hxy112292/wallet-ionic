import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletExportMnemonicPageRoutingModule } from './wallet-export-mnemonic-routing.module';

import { WalletExportMnemonicPage } from './wallet-export-mnemonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletExportMnemonicPageRoutingModule
  ],
  declarations: [WalletExportMnemonicPage]
})
export class WalletExportMnemonicPageModule {}
