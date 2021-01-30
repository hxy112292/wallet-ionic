import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressUpMaxPageRoutingModule } from './address-up-max-routing.module';

import { AddressUpMaxPage } from './address-up-max.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressUpMaxPageRoutingModule
  ],
  declarations: [AddressUpMaxPage]
})
export class AddressUpMaxPageModule {}
