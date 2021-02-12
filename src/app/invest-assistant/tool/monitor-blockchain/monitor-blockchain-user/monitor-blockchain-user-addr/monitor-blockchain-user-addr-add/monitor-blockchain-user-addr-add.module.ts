import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserAddrAddPageRoutingModule } from './monitor-blockchain-user-addr-add-routing.module';

import { MonitorBlockchainUserAddrAddPage } from './monitor-blockchain-user-addr-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorBlockchainUserAddrAddPageRoutingModule
  ],
  declarations: [MonitorBlockchainUserAddrAddPage]
})
export class MonitorBlockchainUserAddrAddPageModule {}
