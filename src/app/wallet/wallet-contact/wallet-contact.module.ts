import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletContactPageRoutingModule } from './wallet-contact-routing.module';

import { WalletContactPage } from './wallet-contact.page';
import {WalletContactAddPageModule} from './wallet-contact-add/wallet-contact-add.module';
import {WalletContactEditPageModule} from './wallet-contact-edit/wallet-contact-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletContactPageRoutingModule,
    WalletContactAddPageModule,
    WalletContactEditPageModule
  ],
  declarations: [WalletContactPage]
})
export class WalletContactPageModule {}
