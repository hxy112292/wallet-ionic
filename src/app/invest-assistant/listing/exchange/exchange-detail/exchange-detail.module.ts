import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeDetailPageRoutingModule } from './exchange-detail-routing.module';

import { ExchangeDetailPage } from './exchange-detail.page';
import {StarRatingModule} from 'ionic5-star-rating';
import {ExchangeDescPageModule} from './exchange-desc/exchange-desc.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExchangeDetailPageRoutingModule,
        StarRatingModule,
        ExchangeDescPageModule
    ],
  declarations: [ExchangeDetailPage]
})
export class ExchangeDetailPageModule {}
