import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly walletBackendUrl: string = 'https://www.hd-wallet.com:7070';
  // readonly walletToolBackendUrl: string = 'https://www.hd-wallet.com:7071';
  readonly walletToolBackendUrl: string = 'http://localhost:7071';
  readonly webUrl: string = 'https://www.hd-wallet.com';
  readonly githubUrl: string = 'https://github.com/hxy112292/wallet-ionic';
  readonly litecoreTestnetUrl: string = 'https://testnet.litecore.io';
  readonly litecoreUrl: string = 'https://insight.litecore.io';
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

  constructor() {
  }
}
