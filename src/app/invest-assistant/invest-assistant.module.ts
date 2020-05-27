import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestAssistantPageRoutingModule } from './invest-assistant-routing.module';

import { InvestAssistantPage } from './invest-assistant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestAssistantPageRoutingModule
  ],
  declarations: [InvestAssistantPage]
})
export class InvestAssistantPageModule {}
