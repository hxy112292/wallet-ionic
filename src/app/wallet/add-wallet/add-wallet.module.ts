import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWalletPageRoutingModule } from './add-wallet-routing.module';

import { AddWalletPage } from './add-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWalletPageRoutingModule
  ],
  declarations: [AddWalletPage]
})
export class AddWalletPageModule {}
