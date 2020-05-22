import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../entity/private-key';
import {BlockchairBtcAddress} from '../entity/blockchair-btc-address';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {BlockchairEthAddress} from '../entity/blockchair-eth-address';

@Component({
  selector: 'app-wallet-ethereum-center',
  templateUrl: './wallet-ethereum-center.page.html',
  styleUrls: ['./wallet-ethereum-center.page.scss'],
})
export class WalletEthereumCenterPage implements OnInit {

  privateKey: PrivateKey;
  blockChairAddress: BlockchairEthAddress;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService) {

    this.privateKey = {
      mnemonic: '',
      btcAddress: '',
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: this.constant.testETHAddress,
      password: ''
    };

    this.blockChairAddress = {
      balance: '',
      balance_usd: '',
      state: '',
      transactions: []
    };
  }

  ngOnInit() {
    // this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
  }

  getAddressInfo() {
    this.http.get(this.constant.blockChairUrl + '/ethereum/dashboards/address/' + this.privateKey.ethAddress, {
      params: {
        transaction_details: 'true',
        limit: '30,30'
      }
    }).subscribe(res => {
      const data = (res as any).data;
      // tslint:disable-next-line:forin
      for (const key in data) {
        const value = data[key];
        this.blockChairAddress = (value as any).address;
        this.blockChairAddress.transactions = (value as any).calls;
        break;
      }
      this.blockChairAddress.state = (res as any).context.state;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getAddressInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toWalletEthereumTransaction(hash: string) {
    this.router.navigate(['tabs/wallet/wallet-ethereum-transaction', {transaction: hash}]);
  }

  toWalletEthereumReceive(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-ethereum-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }
}
