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
          },
          {
            path: 'blockchain-browser',
            loadChildren: () => import('../blockchain-browser/blockchain-browser.module').then( m => m.BlockchainBrowserPageModule)
          },
          {
            path: 'concept-detail',
            loadChildren: () => import('../concept-detail/concept-detail.module').then( m => m.ConceptDetailPageModule)
          },
          {
            path: 'coin-detail',
            loadChildren: () => import('../coin-detail/coin-detail.module').then( m => m.CoinDetailPageModule)
          },
          {
            path: 'price-notification',
            loadChildren: () => import('../price-notification/price-notification.module').then( m => m.PriceNotificationPageModule)
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
        path: 'live-news',
        children: [
          {
            path: '',
            loadChildren: () => import('../live-news/live-news.module').then( m => m.LiveNewsPageModule)
          }
        ]
      },
      {
        path: 'listing-latest',
        children: [
          {
            path: '',
            loadChildren: () => import('../listing-latest/listing-latest.module').then( m => m.ListingLatestPageModule)
          },
          {
            path: 'coin-search',
            loadChildren: () => import('../coin-search/coin-search.module').then( m => m.CoinSearchPageModule)
          },
          {
            path: 'coin-detail',
            loadChildren: () => import('../coin-detail/coin-detail.module').then( m => m.CoinDetailPageModule)
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
