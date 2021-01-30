import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinHotSocialPageRoutingModule } from './coin-hot-social-routing.module';

import { CoinHotSocialPage } from './coin-hot-social.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinHotSocialPageRoutingModule
  ],
  exports: [
    CoinHotSocialPage
  ],
  declarations: [CoinHotSocialPage]
})
export class CoinHotSocialPageModule {}
