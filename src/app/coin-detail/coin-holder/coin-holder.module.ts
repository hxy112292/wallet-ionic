import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinHolderPageRoutingModule } from './coin-holder-routing.module';

import { CoinHolderPage } from './coin-holder.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoinHolderPageRoutingModule
    ],
    exports: [
        CoinHolderPage
    ],
    declarations: [CoinHolderPage]
})
export class CoinHolderPageModule {}
