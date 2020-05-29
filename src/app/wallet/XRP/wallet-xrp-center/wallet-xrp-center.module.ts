import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletXrpCenterPageRoutingModule } from './wallet-xrp-center-routing.module';

import { WalletXrpCenterPage } from './wallet-xrp-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletXrpCenterPageRoutingModule
  ],
  declarations: [WalletXrpCenterPage]
})
export class WalletXrpCenterPageModule {}
