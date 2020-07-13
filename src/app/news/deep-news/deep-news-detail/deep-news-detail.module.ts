import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeepNewsDetailPageRoutingModule } from './deep-news-detail-routing.module';

import { DeepNewsDetailPage } from './deep-news-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeepNewsDetailPageRoutingModule
  ],
  declarations: [DeepNewsDetailPage]
})
export class DeepNewsDetailPageModule {}
