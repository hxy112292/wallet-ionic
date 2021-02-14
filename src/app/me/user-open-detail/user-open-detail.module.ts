import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserOpenDetailPageRoutingModule } from './user-open-detail-routing.module';

import { UserOpenDetailPage } from './user-open-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserOpenDetailPageRoutingModule
  ],
  declarations: [UserOpenDetailPage]
})
export class UserOpenDetailPageModule {}
