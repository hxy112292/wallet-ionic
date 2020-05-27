import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotWebPageRoutingModule } from './hot-web-routing.module';

import { HotWebPage } from './hot-web.page';
import {StarRatingModule} from 'ionic5-star-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HotWebPageRoutingModule,
        StarRatingModule
    ],
  declarations: [HotWebPage]
})
export class HotWebPageModule {}
