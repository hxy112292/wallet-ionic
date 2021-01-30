import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PositionDownMaxPageRoutingModule } from './position-down-max-routing.module';

import { PositionDownMaxPage } from './position-down-max.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PositionDownMaxPageRoutingModule
  ],
  declarations: [PositionDownMaxPage]
})
export class PositionDownMaxPageModule {}
