import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefiDataPageRoutingModule } from './defi-data-routing.module';

import { DefiDataPage } from './defi-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefiDataPageRoutingModule
  ],
  declarations: [DefiDataPage]
})
export class DefiDataPageModule {}
