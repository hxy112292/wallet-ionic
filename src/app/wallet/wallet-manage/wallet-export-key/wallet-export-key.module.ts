import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletExportKeyPageRoutingModule } from './wallet-export-key-routing.module';

import { WalletExportKeyPage } from './wallet-export-key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletExportKeyPageRoutingModule
  ],
  declarations: [WalletExportKeyPage]
})
export class WalletExportKeyPageModule {}
