import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConceptDetailPageRoutingModule } from './concept-detail-routing.module';

import { ConceptDetailPage } from './concept-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConceptDetailPageRoutingModule
  ],
  declarations: [ConceptDetailPage]
})
export class ConceptDetailPageModule {}
