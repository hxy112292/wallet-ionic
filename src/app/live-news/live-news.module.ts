import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveNewsPageRoutingModule } from './live-news-routing.module';

import { LiveNewsPage } from './live-news.page';
import {StarRatingModule} from 'ionic5-star-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LiveNewsPageRoutingModule,
        StarRatingModule
    ],
  declarations: [LiveNewsPage]
})
export class LiveNewsPageModule {}
