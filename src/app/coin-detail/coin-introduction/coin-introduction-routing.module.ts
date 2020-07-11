import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinIntroductionPage } from './coin-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: CoinIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinIntroductionPageRoutingModule {}
