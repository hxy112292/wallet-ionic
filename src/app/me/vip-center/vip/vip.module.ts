import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VipPageRoutingModule } from './vip-routing.module';

import { VipPage } from './vip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VipPageRoutingModule
  ],
  exports: [
    VipPage
  ],
  declarations: [VipPage]
})
export class VipPageModule {}
