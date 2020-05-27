import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletEthereumTransactionPageRoutingModule } from './wallet-ethereum-transaction-routing.module';

import { WalletEthereumTransactionPage } from './wallet-ethereum-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletEthereumTransactionPageRoutingModule
  ],
  declarations: [WalletEthereumTransactionPage]
})
export class WalletEthereumTransactionPageModule {}
