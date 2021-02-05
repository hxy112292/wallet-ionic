import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefiLockUpListPageRoutingModule } from './defi-lock-up-list-routing.module';

import { DefiLockUpListPage } from './defi-lock-up-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefiLockUpListPageRoutingModule
  ],
  declarations: [DefiLockUpListPage]
})
export class DefiLockUpListPageModule {}
