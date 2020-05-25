import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeDetailPageRoutingModule } from './exchange-detail-routing.module';

import { ExchangeDetailPage } from './exchange-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeDetailPageRoutingModule
  ],
  declarations: [ExchangeDetailPage]
})
export class ExchangeDetailPageModule {}
