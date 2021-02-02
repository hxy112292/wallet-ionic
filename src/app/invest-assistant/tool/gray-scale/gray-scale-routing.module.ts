import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrayScalePage } from './gray-scale.page';

const routes: Routes = [
  {
    path: '',
    component: GrayScalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrayScalePageRoutingModule {}
