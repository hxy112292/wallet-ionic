import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletContactAddPageRoutingModule } from './wallet-contact-add-routing.module';

import { WalletContactAddPage } from './wallet-contact-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletContactAddPageRoutingModule
  ],
  declarations: [WalletContactAddPage]
})
export class WalletContactAddPageModule {}
