import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {BlockchairBtcAddressTransaction} from '../entity/blockchair-btc-address-transaction';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {TxHistory} from '../entity/tx-history';

@Component({
  selector: 'app-tx-detail',
  templateUrl: './tx-detail.page.html',
  styleUrls: ['./tx-detail.page.scss'],
})
export class TxDetailPage implements OnInit {

  hash: string;
  transaction: BlockchairBtcAddressTransaction;
  options: InAppBrowserOptions;
  txHistory: TxHistory;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private inAppBrowser: InAppBrowser,
              private clipboard: Clipboard,
              private toastController: ToastController) {

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

    this.txHistory = JSON.parse(this.route.snapshot.paramMap.get('txHistoryInfo'));
    this.hash = this.txHistory.txHash;
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.http.get(this.constant.blockChairUrl + '/bitcoin/dashboards/transaction/' + this.hash).subscribe(res => {
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
    url = 'https://www.blockchain.com/btc/tx/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  openAddress(url: string) {
    url = 'https://www.blockchain.com/btc/address/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  async copyTxHash() {

    const toast = await this.toastController.create({
      message: 'Hash已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.transaction.hash);
  }

  async copyAddress(address) {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(address);
  }
}
