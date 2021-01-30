import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinFlowPageRoutingModule } from './coin-flow-routing.module';

import { CoinFlowPage } from './coin-flow.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoinFlowPageRoutingModule
    ],
    exports: [
        CoinFlowPage
    ],
    declarations: [CoinFlowPage]
})
export class CoinFlowPageModule {}
