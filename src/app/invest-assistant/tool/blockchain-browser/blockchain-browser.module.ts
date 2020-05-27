import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockchainBrowserPageRoutingModule } from './blockchain-browser-routing.module';

import { BlockchainBrowserPage } from './blockchain-browser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockchainBrowserPageRoutingModule
  ],
  declarations: [BlockchainBrowserPage]
})
export class BlockchainBrowserPageModule {}
