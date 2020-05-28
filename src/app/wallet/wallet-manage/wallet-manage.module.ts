import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletManagePageRoutingModule } from './wallet-manage-routing.module';

import { WalletManagePage } from './wallet-manage.page';
import {WalletExportKeyPageModule} from './wallet-export-key/wallet-export-key.module';
import {WalletExportMnemonicPageModule} from './wallet-export-mnemonic/wallet-export-mnemonic.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletManagePageRoutingModule,
    WalletExportKeyPageModule,
    WalletExportMnemonicPageModule
  ],
  declarations: [WalletManagePage]
})
export class WalletManagePageModule {}
