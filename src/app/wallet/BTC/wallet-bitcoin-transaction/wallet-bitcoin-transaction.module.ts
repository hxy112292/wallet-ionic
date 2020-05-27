import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBitcoinTransactionPageRoutingModule } from './wallet-bitcoin-transaction-routing.module';

import { WalletBitcoinTransactionPage } from './wallet-bitcoin-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBitcoinTransactionPageRoutingModule
  ],
  declarations: [WalletBitcoinTransactionPage]
})
export class WalletBitcoinTransactionPageModule {}
