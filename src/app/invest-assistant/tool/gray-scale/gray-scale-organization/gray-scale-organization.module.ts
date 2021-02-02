import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrayScaleOrganizationPageRoutingModule } from './gray-scale-organization-routing.module';

import { GrayScaleOrganizationPage } from './gray-scale-organization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrayScaleOrganizationPageRoutingModule
  ],
  exports: [
    GrayScaleOrganizationPage
  ],
  declarations: [GrayScaleOrganizationPage]
})
export class GrayScaleOrganizationPageModule {}
