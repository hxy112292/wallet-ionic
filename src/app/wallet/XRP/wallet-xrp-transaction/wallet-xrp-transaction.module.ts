import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletXrpTransactionPageRoutingModule } from './wallet-xrp-transaction-routing.module';

import { WalletXrpTransactionPage } from './wallet-xrp-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletXrpTransactionPageRoutingModule
  ],
  declarations: [WalletXrpTransactionPage]
})
export class WalletXrpTransactionPageModule {}
