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
  },
  {
    path: 'login',
    loadChildren: () => import('./me/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login-forget-password',
    loadChildren: () => import('./me/login-forget-password/login-forget-password.module')
        .then(m => m.LoginForgetPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./me/register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'register-privacy',
    loadChildren: () => import('./me/register-privacy/register-privacy.module').then(m => m.RegisterPrivacyPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./me/user-info/user-info.module').then(m => m.UserInfoPageModule)
  },
  {
    path: 'wallet-contact',
    loadChildren: () => import('./wallet/wallet-contact/wallet-contact.module').then(m => m.WalletContactPageModule)
  },
  {
    path: 'github',
    loadChildren: () => import('./me/github/github.module').then(m => m.GithubPageModule)
  },
  {
    path: 'wallet-bitcoin-center',
    loadChildren: () => import('./wallet/BTC/wallet-bitcoin-center/wallet-bitcoin-center.module')
        .then(m => m.WalletBitcoinCenterPageModule)
  },
  {
    path: 'wallet-bitcoin-transaction',
    loadChildren: () => import('./wallet/BTC/wallet-bitcoin-transaction/wallet-bitcoin-transaction.module')
        .then( m => m.WalletBitcoinTransactionPageModule)
  },
  {
    path: 'wallet-bitcoin-receive',
    loadChildren: () => import('./wallet/BTC/wallet-bitcoin-receive/wallet-bitcoin-receive.module')
        .then( m => m.WalletBitcoinReceivePageModule)
  },
  {
    path: 'wallet-bitcoin-send',
    loadChildren: () => import('./wallet/BTC/wallet-bitcoin-send/wallet-bitcoin-send.module')
        .then( m => m.WalletBitcoinSendPageModule)
  },
  {
    path: 'wallet-ethereum-center',
    loadChildren: () => import('./wallet/ETH/wallet-ethereum-center/wallet-ethereum-center.module')
        .then( m => m.WalletEthereumCenterPageModule)
  },
  {
    path: 'wallet-ethereum-transaction',
    loadChildren: () => import('./wallet/ETH/wallet-ethereum-transaction/wallet-ethereum-transaction.module')
        .then( m => m.WalletEthereumTransactionPageModule)
  },
  {
    path: 'wallet-ethereum-receive',
    loadChildren: () => import('./wallet/ETH/wallet-ethereum-receive/wallet-ethereum-receive.module')
        .then( m => m.WalletEthereumReceivePageModule)
  },
  {
    path: 'wallet-ethereum-send',
    loadChildren: () => import('./wallet/ETH/wallet-ethereum-send/wallet-ethereum-send.module')
        .then( m => m.WalletEthereumSendPageModule)
  },
  {
    path: 'wallet-litecoin-center',
    loadChildren: () => import('./wallet/LTC/wallet-litecoin-center/wallet-litecoin-center.module')
        .then( m => m.WalletLitecoinCenterPageModule)
  },
  {
    path: 'wallet-litecoin-transaction',
    loadChildren: () => import('./wallet/LTC/wallet-litecoin-transaction/wallet-litecoin-transaction.module')
        .then( m => m.WalletLitecoinTransactionPageModule)
  },
  {
    path: 'wallet-litecoin-receive',
    loadChildren: () => import('./wallet/LTC/wallet-litecoin-receive/wallet-litecoin-receive.module')
        .then( m => m.WalletLitecoinReceivePageModule)
  },
  {
    path: 'wallet-litecoin-send',
    loadChildren: () => import('./wallet/LTC/wallet-litecoin-send/wallet-litecoin-send.module')
        .then(m => m.WalletLitecoinSendPageModule)
  },
  {
    path: 'wallet-add',
    loadChildren: () => import('./wallet/wallet-create/wallet-add/wallet-add.module').then(m => m.WalletAddPageModule)
  },
  {
    path: 'wallet-add-choose',
    loadChildren: () => import('./wallet/wallet-create/wallet-add-choose/wallet-add-choose.module')
        .then(m => m.WalletAddChoosePageModule)
  },
  {
    path: 'wallet-mnemonic-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-mnemonic-import/wallet-mnemonic-import.module')
        .then( m => m.WalletMnemonicImportPageModule)
  },
  {
    path: 'wallet-mnemonic-generate',
    loadChildren: () => import('./wallet/wallet-create/wallet-mnemonic-generate/wallet-mnemonic-generate.module')
        .then( m => m.WalletMnemonicGeneratePageModule)
  },
  {
    path: 'wallet-mnemonic-confirm',
    loadChildren: () => import('./wallet/wallet-create/wallet-mnemonic-confirm/wallet-mnemonic-confirm.module')
        .then( m => m.WalletMnemonicConfirmPageModule)
  },
  {
    path: 'wallet-manage',
    loadChildren: () => import('./wallet/wallet-manage/wallet-manage.module').then(m => m.WalletManagePageModule)
  },
  {
    path: 'wallet-reset-password',
    loadChildren: () => import('./wallet/wallet-manage/wallet-reset-password/wallet-reset-password.module')
        .then(m => m.WalletResetPasswordPageModule)
  },
  {
    path: 'wallet-mnemonic-password',
    loadChildren: () => import('./wallet/wallet-manage/wallet-mnemonic-password/wallet-mnemonic-password.module')
        .then( m => m.WalletMnemonicPasswordPageModule)
  },
  {
    path: 'wallet-contact-choose',
    loadChildren: () => import('./wallet/wallet-contact/wallet-contact-choose/wallet-contact-choose.module')
        .then(m => m.WalletContactChoosePageModule)
  },
  {
    path: 'wallet-bch-center',
    loadChildren: () => import('./wallet/BCH/wallet-bch-center/wallet-bch-center.module')
        .then(m => m.WalletBchCenterPageModule)
  },
  {
    path: 'wallet-bch-receive',
    loadChildren: () => import('./wallet/BCH/wallet-bch-receive/wallet-bch-receive.module')
        .then(m => m.WalletBchReceivePageModule)
  },
  {
    path: 'wallet-bch-send',
    loadChildren: () => import('./wallet/BCH/wallet-bch-send/wallet-bch-send.module')
        .then(m => m.WalletBchSendPageModule)
  },
  {
    path: 'wallet-bch-transaction',
    loadChildren: () => import('./wallet/BCH/wallet-bch-transaction/wallet-bch-transaction.module')
        .then(m => m.WalletBchTransactionPageModule)
  },
  {
    path: 'wallet-xrp-center',
    loadChildren: () => import('./wallet/XRP/wallet-xrp-center/wallet-xrp-center.module').then(m => m.WalletXrpCenterPageModule)
  },
  {
    path: 'wallet-xrp-receive',
    loadChildren: () => import('./wallet/XRP/wallet-xrp-receive/wallet-xrp-receive.module').then(m => m.WalletXrpReceivePageModule)
  },
  {
    path: 'wallet-xrp-send',
    loadChildren: () => import('./wallet/XRP/wallet-xrp-send/wallet-xrp-send.module').then(m => m.WalletXrpSendPageModule)
  },
  {
    path: 'wallet-xrp-transaction',
    loadChildren: () => import('./wallet/XRP/wallet-xrp-transaction/wallet-xrp-transaction.module')
        .then(m => m.WalletXrpTransactionPageModule)
  },
  {
    path: 'wallet-ethereum-erc20-center',
    loadChildren: () => import('./wallet/ETH/wallet-ethereum-erc20-center/wallet-ethereum-erc20-center.module')
        .then(m => m.WalletEthereumErc20CenterPageModule)
  },
  {
    path: 'wallet-erc20-add',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-add/wallet-erc20-add.module').then(m => m.WalletErc20AddPageModule)
  },
  {
    path: 'wallet-erc20-search',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-search/wallet-erc20-search.module')
        .then(m => m.WalletErc20SearchPageModule)
  },
  {
    path: 'wallet-erc20-center',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-center/wallet-erc20-center.module')
        .then(m => m.WalletErc20CenterPageModule)
  },
  {
    path: 'wallet-erc20-receive',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-receive/wallet-erc20-receive.module')
        .then(m => m.WalletErc20ReceivePageModule)
  },
  {
    path: 'wallet-erc20-transaction',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-transaction/wallet-erc20-transaction.module')
        .then(m => m.WalletErc20TransactionPageModule)
  },
  {
    path: 'wallet-erc20-send',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-send/wallet-erc20-send.module').then(m => m.WalletErc20SendPageModule)
  },
  {
    path: 'wallet-erc20-manage',
    loadChildren: () => import('./wallet/ETH/wallet-erc20-manage/wallet-erc20-manage.module')
        .then(m => m.WalletErc20ManagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
