import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletBchReceivePageRoutingModule } from './wallet-bch-receive-routing.module';

import { WalletBchReceivePage } from './wallet-bch-receive.page';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WalletBchReceivePageRoutingModule,
        NgxQRCodeModule
    ],
  declarations: [WalletBchReceivePage]
})
export class WalletBchReceivePageModule {}
