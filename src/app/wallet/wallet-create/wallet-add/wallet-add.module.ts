import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletAddPageRoutingModule } from './wallet-add-routing.module';

import { WalletAddPage } from './wallet-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletAddPageRoutingModule
  ],
  declarations: [WalletAddPage]
})
export class WalletAddPageModule {}
