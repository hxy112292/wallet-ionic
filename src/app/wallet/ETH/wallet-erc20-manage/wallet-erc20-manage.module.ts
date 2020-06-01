import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20ManagePageRoutingModule } from './wallet-erc20-manage-routing.module';

import { WalletErc20ManagePage } from './wallet-erc20-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20ManagePageRoutingModule
  ],
  declarations: [WalletErc20ManagePage]
})
export class WalletErc20ManagePageModule {}
