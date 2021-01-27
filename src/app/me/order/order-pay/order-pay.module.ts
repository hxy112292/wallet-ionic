import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPayPageRoutingModule } from './order-pay-routing.module';

import { OrderPayPage } from './order-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPayPageRoutingModule
  ],
  declarations: [OrderPayPage]
})
export class OrderPayPageModule {}
