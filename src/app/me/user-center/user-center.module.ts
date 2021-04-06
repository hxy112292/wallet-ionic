import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCenterPageRoutingModule } from './user-center-routing.module';

import { UserCenterPage } from './user-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCenterPageRoutingModule
  ],
  declarations: [UserCenterPage]
})
export class UserCenterPageModule {}
