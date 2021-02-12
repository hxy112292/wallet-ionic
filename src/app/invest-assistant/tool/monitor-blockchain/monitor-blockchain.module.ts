import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainPageRoutingModule } from './monitor-blockchain-routing.module';

import { MonitorBlockchainPage } from './monitor-blockchain.page';
import {MonitorBlockchainSystemPageModule} from './monitor-blockchain-system/monitor-blockchain-system.module';
import {MonitorBlockchainUserPageModule} from './monitor-blockchain-user/monitor-blockchain-user.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MonitorBlockchainPageRoutingModule,
        MonitorBlockchainSystemPageModule,
        MonitorBlockchainUserPageModule
    ],
  declarations: [MonitorBlockchainPage]
})
export class MonitorBlockchainPageModule {}
