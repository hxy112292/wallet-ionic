import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletErc20ReceivePageRoutingModule } from './wallet-erc20-receive-routing.module';

import { WalletErc20ReceivePage } from './wallet-erc20-receive.page';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletErc20ReceivePageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [WalletErc20ReceivePage]
})
export class WalletErc20ReceivePageModule {}
