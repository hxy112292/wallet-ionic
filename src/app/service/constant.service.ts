import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly walletBackendUrl: string = 'https://www.hd-wallet.com:7070';
  readonly walletToolBackendUrl: string = 'https://www.hd-wallet.com:7071';
  readonly webUrl: string = 'https://www.hd-wallet.com';
  readonly githubUrl: string = 'https://github.com/hxy112292/wallet-ionic';
  readonly litecoreTestnetUrl: string = 'https://testnet.litecore.io';
  readonly litecoreUrl: string = 'https://insight.litecore.io';
  readonly ROLE_VIP: string = 'ROLE_VIP';
  readonly ROLE_USER: string = 'ROLE_USER';

  constructor() {
  }
}
