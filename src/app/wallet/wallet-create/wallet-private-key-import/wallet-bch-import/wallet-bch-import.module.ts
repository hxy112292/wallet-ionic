import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBchImportPageRoutingModule } from './wallet-bch-import-routing.module';

import { WalletBchImportPage } from './wallet-bch-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBchImportPageRoutingModule
  ],
  declarations: [WalletBchImportPage]
})
export class WalletBchImportPageModule {}
