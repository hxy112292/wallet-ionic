import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefiEthDataPageRoutingModule } from './defi-eth-data-routing.module';

import { DefiEthDataPage } from './defi-eth-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefiEthDataPageRoutingModule
  ],
  declarations: [DefiEthDataPage]
})
export class DefiEthDataPageModule {}
