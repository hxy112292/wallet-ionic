import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletLitecoinReceivePageRoutingModule } from './wallet-litecoin-receive-routing.module';

import { WalletLitecoinReceivePage } from './wallet-litecoin-receive.page';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WalletLitecoinReceivePageRoutingModule,
        NgxQRCodeModule
    ],
  declarations: [WalletLitecoinReceivePage]
})
export class WalletLitecoinReceivePageModule {}
