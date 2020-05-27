import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptPage } from './concept.page';

const routes: Routes = [
  {
    path: '',
    component: ConceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConceptPageRoutingModule {}
