import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletLitecoinCenterPageRoutingModule } from './wallet-litecoin-center-routing.module';

import { WalletLitecoinCenterPage } from './wallet-litecoin-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletLitecoinCenterPageRoutingModule
  ],
  declarations: [WalletLitecoinCenterPage]
})
export class WalletLitecoinCenterPageModule {}
