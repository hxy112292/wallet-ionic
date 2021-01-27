import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPrivacyPage } from './register-privacy.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPrivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPrivacyPageRoutingModule {}
