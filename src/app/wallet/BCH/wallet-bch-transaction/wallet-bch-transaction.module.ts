import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBchTransactionPageRoutingModule } from './wallet-bch-transaction-routing.module';

import { WalletBchTransactionPage } from './wallet-bch-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBchTransactionPageRoutingModule
  ],
  declarations: [WalletBchTransactionPage]
})
export class WalletBchTransactionPageModule {}
