import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PositionUpMaxPageRoutingModule } from './position-up-max-routing.module';

import { PositionUpMaxPage } from './position-up-max.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PositionUpMaxPageRoutingModule
  ],
  declarations: [PositionUpMaxPage]
})
export class PositionUpMaxPageModule {}
