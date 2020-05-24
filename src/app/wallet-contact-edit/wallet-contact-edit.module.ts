import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletContactEditPageRoutingModule } from './wallet-contact-edit-routing.module';

import { WalletContactEditPage } from './wallet-contact-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletContactEditPageRoutingModule
  ],
  declarations: [WalletContactEditPage]
})
export class WalletContactEditPageModule {}
