import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletXrpReceivePageRoutingModule } from './wallet-xrp-receive-routing.module';

import { WalletXrpReceivePage } from './wallet-xrp-receive.page';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WalletXrpReceivePageRoutingModule,
        NgxQRCodeModule
    ],
  declarations: [WalletXrpReceivePage]
})
export class WalletXrpReceivePageModule {}
