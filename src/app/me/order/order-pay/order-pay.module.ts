import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPayPageRoutingModule } from './order-pay-routing.module';

import { OrderPayPage } from './order-pay.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderPayPageRoutingModule,
        NgxQRCodeModule
    ],
  declarations: [OrderPayPage]
})
export class OrderPayPageModule {}
