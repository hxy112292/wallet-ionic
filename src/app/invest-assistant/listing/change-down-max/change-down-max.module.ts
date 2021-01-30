import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeDownMaxPageRoutingModule } from './change-down-max-routing.module';

import { ChangeDownMaxPage } from './change-down-max.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeDownMaxPageRoutingModule
  ],
  declarations: [ChangeDownMaxPage]
})
export class ChangeDownMaxPageModule {}
