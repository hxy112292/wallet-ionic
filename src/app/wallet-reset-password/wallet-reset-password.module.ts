import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletResetPasswordPageRoutingModule } from './wallet-reset-password-routing.module';

import { WalletResetPasswordPage } from './wallet-reset-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletResetPasswordPageRoutingModule
  ],
  declarations: [WalletResetPasswordPage]
})
export class WalletResetPasswordPageModule {}
