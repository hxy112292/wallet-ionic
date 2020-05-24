import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginForgetPasswordPageRoutingModule } from './login-forget-password-routing.module';

import { LoginForgetPasswordPage } from './login-forget-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginForgetPasswordPageRoutingModule
  ],
  declarations: [LoginForgetPasswordPage]
})
export class LoginForgetPasswordPageModule {}
