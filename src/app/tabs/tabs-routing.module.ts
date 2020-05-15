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
          },
          {
            path: 'monitor-blockchain',
            loadChildren: () => import('../monitor-blockchain/monitor-blockchain.module').then( m => m.MonitorBlockchainPageModule)
          },
          {
            path: 'tx-detail',
            loadChildren: () => import('../tx-detail/tx-detail.module').then( m => m.TxDetailPageModule)
          },
          {
            path: 'hot-web',
            loadChildren: () => import('../hot-web/hot-web.module').then( m => m.HotWebPageModule)
          }
        ]
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren: () => import('../me/me.module').then( m => m.MePageModule)
          },
          {
            path: 'login',
            loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
          },
          {
            path: 'register',
            loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
          },
          {
            path: 'register-privacy',
            loadChildren: () => import('../register-privacy/register-privacy.module').then( m => m.RegisterPrivacyPageModule)
          },
          {
            path: 'user-info',
            loadChildren: () => import('../user-info/user-info.module').then( m => m.UserInfoPageModule)
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
