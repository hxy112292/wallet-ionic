import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20TransactionPageRoutingModule } from './wallet-erc20-transaction-routing.module';

import { WalletErc20TransactionPage } from './wallet-erc20-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20TransactionPageRoutingModule
  ],
  declarations: [WalletErc20TransactionPage]
})
export class WalletErc20TransactionPageModule {}
