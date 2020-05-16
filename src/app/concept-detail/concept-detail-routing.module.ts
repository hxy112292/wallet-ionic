import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptDetailPage } from './concept-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ConceptDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConceptDetailPageRoutingModule {}
