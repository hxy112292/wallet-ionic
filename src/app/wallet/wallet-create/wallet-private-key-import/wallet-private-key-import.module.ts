import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPrivateKeyImportPageRoutingModule } from './wallet-private-key-import-routing.module';

import { WalletPrivateKeyImportPage } from './wallet-private-key-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPrivateKeyImportPageRoutingModule
  ],
  declarations: [WalletPrivateKeyImportPage]
})
export class WalletPrivateKeyImportPageModule {}
