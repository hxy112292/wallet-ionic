import { Component, OnInit } from '@angular/core';
import {BlockchairBtcAddressTransaction} from '../entity/blockchair-btc-address-transaction';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {BlockchairEthAddressTransaction} from '../entity/blockchair-eth-address-transaction';

@Component({
  selector: 'app-wallet-ethereum-transaction',
  templateUrl: './wallet-ethereum-transaction.page.html',
  styleUrls: ['./wallet-ethereum-transaction.page.scss'],
})
export class WalletEthereumTransactionPage implements OnInit {

  hash: string;
  transaction: BlockchairEthAddressTransaction;
  options: InAppBrowserOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private inAppBrowser: InAppBrowser) {

    this.transaction = {
      block_id: '',
      transaction_hash: '',
      time: '',
      sender: '',
      recipient: '',
      value: '',
      value_usd: '',
      transferred: '',
      state: '',
      hash: ''
    };

    this.options = {
      location : 'yes',
      hidden : 'no',
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no',
    };
  }

  ngOnInit() {

    this.hash = this.route.snapshot.paramMap.get('transaction');
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.http.get(this.constant.blockChairUrl + '/ethereum/dashboards/transaction/' + this.hash).subscribe(res => {
      const data = (res as any).data;
      // tslint:disable-next-line:forin
      for (const key in data) {
        const value = data[key];
        this.transaction = (value as any).transaction;
        break;
      }
      this.transaction.state = (res as any).context.state;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getTransactionInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openHash(url: string) {
    url = 'https://etherscan.io/tx/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  openAddress(url: string) {
    url = 'https://etherscan.io/address/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

}
