import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPrivateKeyPasswordPageRoutingModule } from './wallet-private-key-password-routing.module';

import { WalletPrivateKeyPasswordPage } from './wallet-private-key-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPrivateKeyPasswordPageRoutingModule
  ],
  declarations: [WalletPrivateKeyPasswordPage]
})
export class WalletPrivateKeyPasswordPageModule {}
