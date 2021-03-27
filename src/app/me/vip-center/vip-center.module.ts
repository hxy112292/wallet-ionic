import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VipCenterPageRoutingModule } from './vip-center-routing.module';

import { VipCenterPage } from './vip-center.page';
import {VipPageModule} from './vip/vip.module';
import {OrderPageModule} from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VipCenterPageRoutingModule,
    VipPageModule,
    OrderPageModule
  ],
  declarations: [VipCenterPage]
})
export class VipCenterPageModule {}
