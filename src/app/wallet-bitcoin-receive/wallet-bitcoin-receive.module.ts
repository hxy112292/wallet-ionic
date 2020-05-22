import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBitcoinReceivePageRoutingModule } from './wallet-bitcoin-receive-routing.module';

import { WalletBitcoinReceivePage } from './wallet-bitcoin-receive.page';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WalletBitcoinReceivePageRoutingModule,
        NgxQRCodeModule
    ],
  declarations: [WalletBitcoinReceivePage]
})
export class WalletBitcoinReceivePageModule {}
