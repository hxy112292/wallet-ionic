import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'invest-assistant',
    loadChildren: () => import('./invest-assistant/invest-assistant.module').then( m => m.InvestAssistantPageModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./me/me.module').then( m => m.MePageModule)
  },
  {
    path: 'exchange',
    loadChildren: () => import('./invest-assistant/listing/exchange/exchange.module').then(m => m.ExchangePageModule),
  },
  {
    path: 'exchange-detail',
    loadChildren: () => import('./invest-assistant/listing/exchange/exchange-detail/exchange-detail.module')
        .then(m => m.ExchangeDetailPageModule)
  },
  {
    path: 'hot-coin',
    loadChildren: () => import('./invest-assistant/listing/hot-coin/hot-coin.module').then(m => m.HotCoinPageModule)
  },
  {
    path: 'concept',
    loadChildren: () => import('./invest-assistant/listing/concept/concept.module').then(m => m.ConceptPageModule)
  },
  {
    path: 'concept-detail',
    loadChildren: () => import('./invest-assistant/listing/concept/concept-detail/concept-detail.module')
        .then(m => m.ConceptDetailPageModule)
  },
  {
    path: 'git-dev',
    loadChildren: () => import('./invest-assistant/listing/git-dev/git-dev.module').then(m => m.GitDevPageModule)
  },
  {
    path: 'turnover',
    loadChildren: () => import('./invest-assistant/listing/turnover/turnover.module').then(m => m.TurnoverPageModule)
  },
  {
    path: 'monitor-blockchain',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/monitor-blockchain.module')
        .then(m => m.MonitorBlockchainPageModule)
  },
  {
    path: 'tx-detail',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/tx-detail/tx-detail.module')
        .then(m => m.TxDetailPageModule)
  },
  {
    path: 'hot-web',
    loadChildren: () => import('./invest-assistant/beginer-guide/hot-web/hot-web.module').then(m => m.HotWebPageModule)
  },
  {
    path: 'blockchain-browser',
    loadChildren: () => import('./invest-assistant/tool/blockchain-browser/blockchain-browser.module')
        .then(m => m.BlockchainBrowserPageModule)
  },
  {
    path: 'coin-detail',
    loadChildren: () => import('./coin-detail/coin-detail.module').then(m => m.CoinDetailPageModule)
  },
  {
    path: 'price-notification',
    loadChildren: () => import('./invest-assistant/tool/price-notification/price-notification.module')
        .then(m => m.PriceNotificationPageModule)
  },
  {
    path: 'market-statistics',
    loadChildren: () => import('./invest-assistant/tool/market-statistics/market-statistics.module')
        .then(m => m.MarketStatisticsPageModule)
  },
  {
    path: 'coin-search',
    loadChildren: () => import('./listing-latest/coin-search/coin-search.module')
        .then(m => m.CoinSearchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
