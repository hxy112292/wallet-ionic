import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrayScalePageRoutingModule } from './gray-scale-routing.module';

import { GrayScalePage } from './gray-scale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrayScalePageRoutingModule
  ],
  declarations: [GrayScalePage]
})
export class GrayScalePageModule {}
