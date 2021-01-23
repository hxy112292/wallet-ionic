import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBtcImportPageRoutingModule } from './wallet-btc-import-routing.module';

import { WalletBtcImportPage } from './wallet-btc-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBtcImportPageRoutingModule
  ],
  declarations: [WalletBtcImportPage]
})
export class WalletBtcImportPageModule {}
