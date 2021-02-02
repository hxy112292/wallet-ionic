import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrayScalePageRoutingModule } from './gray-scale-routing.module';

import { GrayScalePage } from './gray-scale.page';
import {GrayScaleCoinListPageModule} from './gray-scale-coin-list/gray-scale-coin-list.module';
import {GrayScaleOrganizationPageModule} from './gray-scale-organization/gray-scale-organization.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GrayScalePageRoutingModule,
        GrayScaleCoinListPageModule,
        GrayScaleOrganizationPageModule
    ],
  declarations: [GrayScalePage]
})
export class GrayScalePageModule {}
