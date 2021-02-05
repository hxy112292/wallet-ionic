import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefiMiningListPageRoutingModule } from './defi-mining-list-routing.module';

import { DefiMiningListPage } from './defi-mining-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DefiMiningListPageRoutingModule
    ],
    exports: [
        DefiMiningListPage
    ],
    declarations: [DefiMiningListPage]
})
export class DefiMiningListPageModule {}
