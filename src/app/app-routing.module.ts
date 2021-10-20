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
    loadChildren: () => import('./me/login/login-forget-password/login-forget-password.module')
        .then(m => m.LoginForgetPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./me/register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'register-privacy',
    loadChildren: () => import('./me/register/register-privacy/register-privacy.module').then(m => m.RegisterPrivacyPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./me/user-center/user-info/user-info.module').then(m => m.UserInfoPageModule)
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
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'deep-news-detail',
    loadChildren: () => import('./news/deep-news/deep-news-detail/deep-news-detail.module').then(m => m.DeepNewsDetailPageModule)
  },
  {
    path: 'market-currency',
    loadChildren: () => import('./invest-assistant/tool/market-statistics/market-currency/market-currency.module')
        .then(m => m.MarketCurrencyPageModule)
  },
  {
    path: 'website',
    loadChildren: () => import('./me/website/website.module').then(m => m.WebsitePageModule)
  },
  {
    path: 'wallet-private-key-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-private-key-import/wallet-private-key-import.module').then(m => m.WalletPrivateKeyImportPageModule)
  },
  {
    path: 'wallet-btc-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-private-key-import/wallet-btc-import/wallet-btc-import.module').then(m => m.WalletBtcImportPageModule)
  },
  {
    path: 'wallet-eth-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-private-key-import/wallet-eth-import/wallet-eth-import.module').then(m => m.WalletEthImportPageModule)
  },
  {
    path: 'wallet-ltc-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-private-key-import/wallet-ltc-import/wallet-ltc-import.module').then(m => m.WalletLtcImportPageModule)
  },
  {
    path: 'wallet-bch-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-private-key-import/wallet-bch-import/wallet-bch-import.module').then(m => m.WalletBchImportPageModule)
  },
  {
    path: 'wallet-xrp-import',
    loadChildren: () => import('./wallet/wallet-create/wallet-private-key-import/wallet-xrp-import/wallet-xrp-import.module').then(m => m.WalletXrpImportPageModule)
  },
  {
    path: 'wallet-private-key-password',
    loadChildren: () => import('./wallet/wallet-manage/wallet-private-key-password/wallet-private-key-password.module').then(m => m.WalletPrivateKeyPasswordPageModule)
  },
  {
    path: 'vip',
    loadChildren: () => import('./me/vip-center/vip/vip.module').then(m => m.VipPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./me/vip-center/order/order.module').then(m => m.OrderPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./me/vip-center/order/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },
  {
    path: 'wallet-pay-choose',
    loadChildren: () => import('./wallet/wallet-pay/wallet-pay-choose/wallet-pay-choose.module').then(m => m.WalletPayChoosePageModule)
  },
  {
    path: 'wallet-eth-pay',
    loadChildren: () => import('./wallet/wallet-pay/wallet-eth-pay/wallet-eth-pay.module').then(m => m.WalletEthPayPageModule)
  },
  {
    path: 'change-up-max',
    loadChildren: () => import('./invest-assistant/listing/change-up-max/change-up-max.module').then(m => m.ChangeUpMaxPageModule)
  },
  {
    path: 'change-down-max',
    loadChildren: () => import('./invest-assistant/listing/change-down-max/change-down-max.module').then(m => m.ChangeDownMaxPageModule)
  },
  {
    path: 'change-vol',
    loadChildren: () => import('./invest-assistant/listing/change-vol/change-vol.module').then(m => m.ChangeVolPageModule)
  },
  {
    path: 'position-up-max',
    loadChildren: () => import('./invest-assistant/listing/position-up-max/position-up-max.module').then(m => m.PositionUpMaxPageModule)
  },
  {
    path: 'position-down-max',
    loadChildren: () => import('./invest-assistant/listing/position-down-max/position-down-max.module').then(m => m.PositionDownMaxPageModule)
  },
  {
    path: 'address-up-max',
    loadChildren: () => import('./invest-assistant/listing/address-up-max/address-up-max.module').then(m => m.AddressUpMaxPageModule)
  },
  {
    path: 'coin-flow',
    loadChildren: () => import('./invest-assistant/tool/coin-holder-analysis/coin-flow/coin-flow.module').then(m => m.CoinFlowPageModule)
  },
  {
    path: 'coin-holder',
    loadChildren: () => import('./invest-assistant/tool/coin-holder-analysis/coin-holder/coin-holder.module').then(m => m.CoinHolderPageModule)
  },
  {
    path: 'coin-news',
    loadChildren: () => import('./coin-detail/coin-news/coin-news.module').then(m => m.CoinNewsPageModule)
  },
  {
    path: 'coin-news-detail',
    loadChildren: () => import('./coin-detail/coin-news/coin-news-detail/coin-news-detail.module').then(m => m.CoinNewsDetailPageModule)
  },
  {
    path: 'coin-social-hot-analysis',
    loadChildren: () => import('./invest-assistant/tool/coin-social-hot-analysis/coin-social-hot-analysis.module').then(m => m.CoinSocialHotAnalysisPageModule)
  },
  {
    path: 'coin-holder-analysis',
    loadChildren: () => import('./invest-assistant/tool/coin-holder-analysis/coin-holder-analysis.module').then(m => m.CoinHolderAnalysisPageModule)
  },
  {
    path: 'coin-holder-search',
    loadChildren: () => import('./invest-assistant/tool/coin-holder-analysis/coin-holder-search/coin-holder-search.module').then(m => m.CoinHolderSearchPageModule)
  },
  {
    path: 'coin-social-hot-search',
    loadChildren: () => import('./invest-assistant/tool/coin-social-hot-analysis/coin-social-hot-search/coin-social-hot-search.module').then(m => m.CoinSocialHotSearchPageModule)
  },
  {
    path: 'coin-reduce-half',
    loadChildren: () => import('./coin-detail/coin-reduce-half/coin-reduce-half.module').then(m => m.CoinReduceHalfPageModule)
  },
  {
    path: 'gray-scale',
    loadChildren: () => import('./invest-assistant/tool/gray-scale/gray-scale.module').then(m => m.GrayScalePageModule)
  },
  {
    path: 'gray-scale-coin-list',
    loadChildren: () => import('./invest-assistant/tool/gray-scale/gray-scale-coin-list/gray-scale-coin-list.module').then(m => m.GrayScaleCoinListPageModule)
  },
  {
    path: 'gray-scale-organization',
    loadChildren: () => import('./invest-assistant/tool/gray-scale/gray-scale-organization/gray-scale-organization.module').then(m => m.GrayScaleOrganizationPageModule)
  },
  {
    path: 'defi-data',
    loadChildren: () => import('./invest-assistant/tool/defi-data/defi-data.module').then(m => m.DefiDataPageModule)
  },
  {
    path: 'defi-lock-up-list',
    loadChildren: () => import('./invest-assistant/tool/defi-data/defi-lock-up-list/defi-lock-up-list.module').then(m => m.DefiLockUpListPageModule)
  },
  {
    path: 'defi-rate',
    loadChildren: () => import('./invest-assistant/tool/defi-data/defi-rate/defi-rate.module').then(m => m.DefiRatePageModule)
  },
  {
    path: 'defi-mining-list',
    loadChildren: () => import('./invest-assistant/tool/defi-data/defi-mining-list/defi-mining-list.module').then(m => m.DefiMiningListPageModule)
  },
  {
    path: 'defi-eth-data',
    loadChildren: () => import('./invest-assistant/tool/defi-eth-data/defi-eth-data.module').then(m => m.DefiEthDataPageModule)
  },
  {
    path: 'monitor-blockchain-system',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/monitor-blockchain-system/monitor-blockchain-system.module').then(m => m.MonitorBlockchainSystemPageModule)
  },
  {
    path: 'monitor-blockchain-user',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/monitor-blockchain-user/monitor-blockchain-user.module').then(m => m.MonitorBlockchainUserPageModule)
  },
  {
    path: 'monitor-blockchain-user-addr',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/monitor-blockchain-user/monitor-blockchain-user-addr/monitor-blockchain-user-addr.module').then(m => m.MonitorBlockchainUserAddrPageModule)
  },
  {
    path: 'monitor-blockchain-user-addr-add',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/monitor-blockchain-user/monitor-blockchain-user-addr/monitor-blockchain-user-addr-add/monitor-blockchain-user-addr-add.module').then(m => m.MonitorBlockchainUserAddrAddPageModule)
  },
  {
    path: 'monitor-blockchain-user-addr-update',
    loadChildren: () => import('./invest-assistant/tool/monitor-blockchain/monitor-blockchain-user/monitor-blockchain-user-addr/monitor-blockchain-user-addr-update/monitor-blockchain-user-addr-update.module').then(m => m.MonitorBlockchainUserAddrUpdatePageModule)
  },
  {
    path: 'live-news-detail',
    loadChildren: () => import('./news/live-news/live-news-detail/live-news-detail.module').then(m => m.LiveNewsDetailPageModule)
  },
  {
    path: 'user-open-detail',
    loadChildren: () => import('./me/user-open-detail/user-open-detail.module').then(m => m.UserOpenDetailPageModule)
  },
  {
    path: 'vip-center',
    loadChildren: () => import('./me/vip-center/vip-center.module').then(m => m.VipCenterPageModule)
  },
  {
    path: 'user-center',
    loadChildren: () => import('./me/user-center/user-center.module').then(m => m.UserCenterPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./me/user-center/update-password/update-password.module').then(m => m.UpdatePasswordPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
