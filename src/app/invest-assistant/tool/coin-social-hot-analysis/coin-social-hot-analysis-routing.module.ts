import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinSocialHotAnalysisPage } from './coin-social-hot-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: CoinSocialHotAnalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinSocialHotAnalysisPageRoutingModule {}
