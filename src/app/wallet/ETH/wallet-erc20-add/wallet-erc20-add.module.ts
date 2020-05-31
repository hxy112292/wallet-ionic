import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20AddPageRoutingModule } from './wallet-erc20-add-routing.module';

import { WalletErc20AddPage } from './wallet-erc20-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20AddPageRoutingModule
  ],
  declarations: [WalletErc20AddPage]
})
export class WalletErc20AddPageModule {}
