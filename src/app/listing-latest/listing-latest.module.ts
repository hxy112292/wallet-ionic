import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingLatestPageRoutingModule } from './listing-latest-routing.module';

import { ListingLatestPage } from './listing-latest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingLatestPageRoutingModule
  ],
  declarations: [ListingLatestPage]
})
export class ListingLatestPageModule {}
