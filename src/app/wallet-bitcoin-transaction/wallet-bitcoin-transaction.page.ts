import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {BlockchairBtcAddressTransaction} from '../entity/blockchair-btc-address-transaction';
import {BlockchairBtcTransactionInput} from '../entity/blockchair-btc-transaction-input';
import {BlockchairBtcTransactionOutput} from '../entity/blockchair-btc-transaction-output';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-wallet-bitcoin-transaction',
  templateUrl: './wallet-bitcoin-transaction.page.html',
  styleUrls: ['./wallet-bitcoin-transaction.page.scss'],
})
export class WalletBitcoinTransactionPage implements OnInit {

  hash: string;
  transaction: BlockchairBtcAddressTransaction;
  options: InAppBrowserOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private inAppBrowser: InAppBrowser) {

    this.transaction = {
      block_id: '',
      hash: '',
      time: '',
      balance_change: '',
      input_total: '',
      fee: '',
      state: '',
      inputs: [],
      outputs: []
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
    this.http.get(this.constant.blockChairUrl + '/bitcoin/testnet/dashboards/transaction/' + this.hash).subscribe(res => {
      const data = (res as any).data;
      // tslint:disable-next-line:forin
      for (const key in data) {
        const value = data[key];
        this.transaction = (value as any).transaction;
        this.transaction.inputs = (value as any).inputs;
        this.transaction.outputs = (value as any).outputs;
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
    url = 'https://www.blockchain.com/btctest/tx/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  openAddress(url: string) {
    url = 'https://www.blockchain.com/btctest/address/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

}
