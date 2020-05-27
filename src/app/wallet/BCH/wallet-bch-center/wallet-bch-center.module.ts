import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBchCenterPageRoutingModule } from './wallet-bch-center-routing.module';

import { WalletBchCenterPage } from './wallet-bch-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletBchCenterPageRoutingModule
  ],
  declarations: [WalletBchCenterPage]
})
export class WalletBchCenterPageModule {}
