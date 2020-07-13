import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeepNewsPageRoutingModule } from './deep-news-routing.module';

import { DeepNewsPage } from './deep-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeepNewsPageRoutingModule
  ],
  exports: [
    DeepNewsPage
  ],
  declarations: [DeepNewsPage]
})
export class DeepNewsPageModule {}
