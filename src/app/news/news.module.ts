import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import {LiveNewsPageModule} from './live-news/live-news.module';
import {DeepNewsPageModule} from './deep-news/deep-news.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewsPageRoutingModule,
        LiveNewsPageModule,
        DeepNewsPageModule
    ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
