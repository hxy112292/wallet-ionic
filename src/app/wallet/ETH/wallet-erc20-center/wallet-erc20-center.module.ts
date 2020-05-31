import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20CenterPageRoutingModule } from './wallet-erc20-center-routing.module';

import { WalletErc20CenterPage } from './wallet-erc20-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20CenterPageRoutingModule
  ],
  declarations: [WalletErc20CenterPage]
})
export class WalletErc20CenterPageModule {}
