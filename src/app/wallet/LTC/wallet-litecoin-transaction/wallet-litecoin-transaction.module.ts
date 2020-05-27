import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletLitecoinTransactionPageRoutingModule } from './wallet-litecoin-transaction-routing.module';

import { WalletLitecoinTransactionPage } from './wallet-litecoin-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletLitecoinTransactionPageRoutingModule
  ],
  declarations: [WalletLitecoinTransactionPage]
})
export class WalletLitecoinTransactionPageModule {}
