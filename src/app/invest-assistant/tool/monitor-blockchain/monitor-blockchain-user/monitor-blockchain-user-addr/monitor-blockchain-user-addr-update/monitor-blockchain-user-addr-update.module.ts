import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserAddrUpdatePageRoutingModule } from './monitor-blockchain-user-addr-update-routing.module';

import { MonitorBlockchainUserAddrUpdatePage } from './monitor-blockchain-user-addr-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorBlockchainUserAddrUpdatePageRoutingModule
  ],
  declarations: [MonitorBlockchainUserAddrUpdatePage]
})
export class MonitorBlockchainUserAddrUpdatePageModule {}
