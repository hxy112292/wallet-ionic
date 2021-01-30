import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeUpMaxPageRoutingModule } from './change-up-max-routing.module';

import { ChangeUpMaxPage } from './change-up-max.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeUpMaxPageRoutingModule
  ],
  declarations: [ChangeUpMaxPage]
})
export class ChangeUpMaxPageModule {}
