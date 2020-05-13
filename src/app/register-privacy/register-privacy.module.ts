import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPrivacyPageRoutingModule } from './register-privacy-routing.module';

import { RegisterPrivacyPage } from './register-privacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPrivacyPageRoutingModule
  ],
  declarations: [RegisterPrivacyPage]
})
export class RegisterPrivacyPageModule {}
