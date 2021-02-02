import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrayScaleCoinListPageRoutingModule } from './gray-scale-coin-list-routing.module';

import { GrayScaleCoinListPage } from './gray-scale-coin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrayScaleCoinListPageRoutingModule
  ],
  exports: [
    GrayScaleCoinListPage
  ],
  declarations: [GrayScaleCoinListPage]
})
export class GrayScaleCoinListPageModule {}
