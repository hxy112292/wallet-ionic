import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefiRatePageRoutingModule } from './defi-rate-routing.module';

import { DefiRatePage } from './defi-rate.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DefiRatePageRoutingModule
    ],
    exports: [
        DefiRatePage
    ],
    declarations: [DefiRatePage]
})
export class DefiRatePageModule {}
