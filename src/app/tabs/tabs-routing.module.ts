import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
      },
      {
        path: 'tool',
        children: [
          {
            path: '',
            loadChildren: () => import('../tool/tool.module').then(m => m.ToolPageModule)
          },
          {
            path: 'hot-coin',
            loadChildren: () => import('../hot-coin/hot-coin.module').then( m => m.HotCoinPageModule)
          },
          {
            path: 'concept',
            loadChildren: () => import('../concept/concept.module').then( m => m.ConceptPageModule)
          },
          {
            path: 'git-dev',
            loadChildren: () => import('../git-dev/git-dev.module').then( m => m.GitDevPageModule)
          },
          {
            path: 'turnover',
            loadChildren: () => import('../turnover/turnover.module').then( m => m.TurnoverPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/wallet',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/wallet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
