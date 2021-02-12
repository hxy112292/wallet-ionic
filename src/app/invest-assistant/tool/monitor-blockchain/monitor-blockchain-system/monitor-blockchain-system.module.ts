import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainSystemPageRoutingModule } from './monitor-blockchain-system-routing.module';

import { MonitorBlockchainSystemPage } from './monitor-blockchain-system.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MonitorBlockchainSystemPageRoutingModule
    ],
    exports: [
        MonitorBlockchainSystemPage
    ],
    declarations: [MonitorBlockchainSystemPage]
})
export class MonitorBlockchainSystemPageModule {}
