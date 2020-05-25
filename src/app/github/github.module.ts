import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubPageRoutingModule } from './github-routing.module';

import { GithubPage } from './github.page';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GithubPageRoutingModule,
        NgxQRCodeModule
    ],
  declarations: [GithubPage]
})
export class GithubPageModule {}
