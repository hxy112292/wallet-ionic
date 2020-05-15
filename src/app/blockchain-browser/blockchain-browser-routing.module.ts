import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockchainBrowserPage } from './blockchain-browser.page';

const routes: Routes = [
  {
    path: '',
    component: BlockchainBrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockchainBrowserPageRoutingModule {}
