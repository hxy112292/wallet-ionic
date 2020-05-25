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
        children: [
          {
            path: '',
            loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
          },
          {
            path: 'wallet-add',
            loadChildren: () => import('../wallet-add/wallet-add.module').then( m => m.WalletAddPageModule)
          },
          {
            path: 'wallet-mnemonic-generate',
            loadChildren: () => import('../wallet-mnemonic-generate/wallet-mnemonic-generate.module')
                .then( m => m.WalletMnemonicGeneratePageModule)
          },
          {
            path: 'wallet-mnemonic-confirm',
            loadChildren: () => import('../wallet-mnemonic-confirm/wallet-mnemonic-confirm.module')
                .then( m => m.WalletMnemonicConfirmPageModule)
          },
          {
            path: 'wallet-manage',
            loadChildren: () => import('../wallet-manage/wallet-manage.module').then( m => m.WalletManagePageModule)
          },
          {
            path: 'wallet-add-choose',
            loadChildren: () => import('../wallet-add-choose/wallet-add-choose.module').then( m => m.WalletAddChoosePageModule)
          },
          {
            path: 'wallet-mnemonic-import',
            loadChildren: () => import('../wallet-mnemonic-import/wallet-mnemonic-import.module')
                .then( m => m.WalletMnemonicImportPageModule)
          },
          {
            path: 'wallet-bitcoin-center',
            loadChildren: () => import('../wallet-bitcoin-center/wallet-bitcoin-center.module').then( m => m.WalletBitcoinCenterPageModule)
          },
          {
            path: 'wallet-ethereum-center',
            loadChildren: () => import('../wallet-ethereum-center/wallet-ethereum-center.module')
                .then( m => m.WalletEthereumCenterPageModule)
          },
          {
            path: 'wallet-bitcoin-transaction',
            loadChildren: () => import('../wallet-bitcoin-transaction/wallet-bitcoin-transaction.module')
                .then( m => m.WalletBitcoinTransactionPageModule)
          },
          {
            path: 'wallet-ethereum-transaction',
            loadChildren: () => import('../wallet-ethereum-transaction/wallet-ethereum-transaction.module')
                .then( m => m.WalletEthereumTransactionPageModule)
          },
          {
            path: 'wallet-bitcoin-receive',
            loadChildren: () => import('../wallet-bitcoin-receive/wallet-bitcoin-receive.module')
                .then( m => m.WalletBitcoinReceivePageModule)
          },
          {
            path: 'wallet-ethereum-receive',
            loadChildren: () => import('../wallet-ethereum-receive/wallet-ethereum-receive.module')
                .then( m => m.WalletEthereumReceivePageModule)
          },
          {
            path: 'wallet-bitcoin-send',
            loadChildren: () => import('../wallet-bitcoin-send/wallet-bitcoin-send.module')
                .then( m => m.WalletBitcoinSendPageModule)
          },
          {
            path: 'wallet-ethereum-send',
            loadChildren: () => import('../wallet-ethereum-send/wallet-ethereum-send.module')
                .then( m => m.WalletEthereumSendPageModule)
          },
          {
            path: 'wallet-mnemonic-password',
            loadChildren: () => import('../wallet-mnemonic-password/wallet-mnemonic-password.module')
                .then( m => m.WalletMnemonicPasswordPageModule)
          },
          {
            path: 'wallet-reset-password',
            loadChildren: () => import('../wallet-reset-password/wallet-reset-password.module').then( m => m.WalletResetPasswordPageModule)
          },
          {
            path: 'wallet-contact-choose',
            loadChildren: () => import('../wallet-contact-choose/wallet-contact-choose.module').then( m => m.WalletContactChoosePageModule)
          },
          {
            path: 'coin-detail',
            loadChildren: () => import('../coin-detail/coin-detail.module').then( m => m.CoinDetailPageModule)
          }
        ]
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
          },
          {
            path: 'exchange-detail',
            loadChildren: () => import('../exchange-detail/exchange-detail.module').then( m => m.ExchangeDetailPageModule)
          },
          {
            path: 'exchange',
            loadChildren: () => import('../exchange/exchange.module').then( m => m.ExchangePageModule)
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
          },
          {
            path: 'login-forget-password',
            loadChildren: () => import('../login-forget-password/login-forget-password.module').then( m => m.LoginForgetPasswordPageModule)
          },
          {
            path: 'wallet-contact',
            loadChildren: () => import('../wallet-contact/wallet-contact.module').then( m => m.WalletContactPageModule)
          },
          {
            path: 'github',
            loadChildren: () => import('../github/github.module').then( m => m.GithubPageModule)
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
