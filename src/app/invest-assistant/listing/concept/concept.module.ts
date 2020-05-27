import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConceptPageRoutingModule } from './concept-routing.module';

import { ConceptPage } from './concept.page';
import {StarRatingModule} from 'ionic5-star-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConceptPageRoutingModule,
        StarRatingModule
    ],
  declarations: [ConceptPage]
})
export class ConceptPageModule {}
