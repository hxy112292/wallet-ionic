import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainPageRoutingModule } from './monitor-blockchain-routing.module';

import { MonitorBlockchainPage } from './monitor-blockchain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorBlockchainPageRoutingModule
  ],
  declarations: [MonitorBlockchainPage]
})
export class MonitorBlockchainPageModule {}
