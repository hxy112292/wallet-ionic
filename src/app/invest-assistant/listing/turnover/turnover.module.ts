import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoverPageRoutingModule } from './turnover-routing.module';

import { TurnoverPage } from './turnover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoverPageRoutingModule
  ],
  declarations: [TurnoverPage]
})
export class TurnoverPageModule {}
