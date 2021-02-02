import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrayScaleOrganizationPage } from './gray-scale-organization.page';

const routes: Routes = [
  {
    path: '',
    component: GrayScaleOrganizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrayScaleOrganizationPageRoutingModule {}
