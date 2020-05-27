import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceNotificationHistoryPageRoutingModule } from './price-notification-history-routing.module';

import { PriceNotificationHistoryPage } from './price-notification-history.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PriceNotificationHistoryPageRoutingModule
    ],
    exports: [
        PriceNotificationHistoryPage
    ],
    declarations: [PriceNotificationHistoryPage]
})
export class PriceNotificationHistoryPageModule {}
