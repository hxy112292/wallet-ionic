import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefiDataPageRoutingModule } from './defi-data-routing.module';

import { DefiDataPage } from './defi-data.page';
import {DefiLockUpListPageModule} from './defi-lock-up-list/defi-lock-up-list.module';
import {DefiRatePageModule} from './defi-rate/defi-rate.module';
import {DefiMiningListPageModule} from './defi-mining-list/defi-mining-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DefiDataPageRoutingModule,
        DefiLockUpListPageModule,
        DefiRatePageModule,
        DefiMiningListPageModule
    ],
  declarations: [DefiDataPage]
})
export class DefiDataPageModule {}
