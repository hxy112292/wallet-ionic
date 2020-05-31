import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20SearchPageRoutingModule } from './wallet-erc20-search-routing.module';

import { WalletErc20SearchPage } from './wallet-erc20-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20SearchPageRoutingModule
  ],
  declarations: [WalletErc20SearchPage]
})
export class WalletErc20SearchPageModule {}
