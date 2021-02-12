import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserAddrPageRoutingModule } from './monitor-blockchain-user-addr-routing.module';

import { MonitorBlockchainUserAddrPage } from './monitor-blockchain-user-addr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorBlockchainUserAddrPageRoutingModule
  ],
  declarations: [MonitorBlockchainUserAddrPage]
})
export class MonitorBlockchainUserAddrPageModule {}
