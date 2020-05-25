import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeDescPageRoutingModule } from './exchange-desc-routing.module';

import { ExchangeDescPage } from './exchange-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeDescPageRoutingModule
  ],
  declarations: [ExchangeDescPage]
})
export class ExchangeDescPageModule {}
