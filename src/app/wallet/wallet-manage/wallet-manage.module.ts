import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletManagePageRoutingModule } from './wallet-manage-routing.module';

import { WalletManagePage } from './wallet-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletManagePageRoutingModule
  ],
  declarations: [WalletManagePage]
})
export class WalletManagePageModule {}
