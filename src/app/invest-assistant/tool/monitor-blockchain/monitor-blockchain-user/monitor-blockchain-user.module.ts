import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserPageRoutingModule } from './monitor-blockchain-user-routing.module';

import { MonitorBlockchainUserPage } from './monitor-blockchain-user.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MonitorBlockchainUserPageRoutingModule
    ],
    exports: [
        MonitorBlockchainUserPage
    ],
    declarations: [MonitorBlockchainUserPage]
})
export class MonitorBlockchainUserPageModule {}
