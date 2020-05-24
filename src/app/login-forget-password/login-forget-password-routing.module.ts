import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginForgetPasswordPage } from './login-forget-password.page';

const routes: Routes = [
  {
    path: '',
    component: LoginForgetPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginForgetPasswordPageRoutingModule {}
