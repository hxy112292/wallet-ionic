import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletXrpImportPageRoutingModule } from './wallet-xrp-import-routing.module';

import { WalletXrpImportPage } from './wallet-xrp-import.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletXrpImportPageRoutingModule
  ],
  declarations: [WalletXrpImportPage]
})
export class WalletXrpImportPageModule {}
