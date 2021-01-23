import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletLtcImportPageRoutingModule } from './wallet-ltc-import-routing.module';

import { WalletLtcImportPage } from './wallet-ltc-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletLtcImportPageRoutingModule
  ],
  declarations: [WalletLtcImportPage]
})
export class WalletLtcImportPageModule {}
