import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeVolPageRoutingModule } from './change-vol-routing.module';

import { ChangeVolPage } from './change-vol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeVolPageRoutingModule
  ],
  declarations: [ChangeVolPage]
})
export class ChangeVolPageModule {}
