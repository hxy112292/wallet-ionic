import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitDevPageRoutingModule } from './git-dev-routing.module';

import { GitDevPage } from './git-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitDevPageRoutingModule
  ],
  declarations: [GitDevPage]
})
export class GitDevPageModule {}
