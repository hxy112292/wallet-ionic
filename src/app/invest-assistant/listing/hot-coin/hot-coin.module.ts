import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotCoinPageRoutingModule } from './hot-coin-routing.module';

import { HotCoinPage } from './hot-coin.page';
import {StarRatingModule} from 'ionic5-star-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HotCoinPageRoutingModule,
        StarRatingModule
    ],
  declarations: [HotCoinPage]
})
export class HotCoinPageModule {}
