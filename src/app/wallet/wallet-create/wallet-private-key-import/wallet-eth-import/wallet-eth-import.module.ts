import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthImportPageRoutingModule } from './wallet-eth-import-routing.module';

import { WalletEthImportPage } from './wallet-eth-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthImportPageRoutingModule
  ],
  declarations: [WalletEthImportPage]
})
export class WalletEthImportPageModule {}
