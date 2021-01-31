import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinHolderAnalysisPage } from './coin-holder-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: CoinHolderAnalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinHolderAnalysisPageRoutingModule {}
