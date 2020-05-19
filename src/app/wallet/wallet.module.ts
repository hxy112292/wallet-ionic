import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';

import { WalletPage } from './wallet.page';
import {AddWalletPageModule} from './add-wallet/add-wallet.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPageRoutingModule,
    AddWalletPageModule
  ],
  declarations: [WalletPage]
})
export class WalletPageModule {}
