import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveNewsDetailPageRoutingModule } from './live-news-detail-routing.module';

import { LiveNewsDetailPage } from './live-news-detail.page';
import {StarRatingModule} from 'ionic5-star-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LiveNewsDetailPageRoutingModule,
        StarRatingModule
    ],
  declarations: [LiveNewsDetailPage]
})
export class LiveNewsDetailPageModule {}
