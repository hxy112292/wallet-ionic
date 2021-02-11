import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly walletBackendUrl: string = 'https://www.hd-wallet.com:7071';
  readonly webUrl: string = 'https://www.hd-wallet.com';
  readonly githubUrl: string = 'https://github.com/hxy112292/wallet-ionic';
  readonly litecoreTestnetUrl: string = 'https://testnet.litecore.io';
  readonly litecoreUrl: string = 'https://insight.litecore.io';
  readonly feixiaoMobileUrl: string = 'https://m.feixiaohao.com';
  readonly ROLE_VIP: string = 'ROLE_VIP';
  readonly ROLE_USER: string = 'ROLE_USER';
  readonly ORDER_STATUS_NOT_PAY: number = 0;
  readonly ORDER_STATUS_PAID: number = 1;
  readonly ORDER_STATUS_SHIPPING: number = 2;
  readonly ORDER_STATUS_SHIPPED: number = 3;
  readonly ORDER_STATUS_SUCCESS: number = 4;
  readonly ORDER_STATUS_CLOSED: number = 5;
  readonly ORDER_STATUS_FAIL: number = 6;
  readonly ORDER_STATUS_REFUNDING: number = 7;
  readonly ORDER_STATUS_REFUNDED: number = 8;
  readonly ONE_DAY: string = '1';
  readonly SEVEN_DAY: string = '7';
  readonly THIRTY_DAY: string = '30';
  readonly REDDIT_TYPE: number = 1;
  readonly TWITTER_TYPE: number = 2;
  readonly FACEBOOK_TYPE: number = 3;
  readonly GITHUB_TYPE: number = 4;
  readonly DEFI_RATE_DEBIT: string = '1';
  readonly DEFI_RATE_DEPOSIT: string = '0';
  constructor() {
  }
}
