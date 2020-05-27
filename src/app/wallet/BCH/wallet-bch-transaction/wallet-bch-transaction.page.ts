import {Component, OnInit} from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {CryptoBchTx} from '../../../entity/crypto-bch-tx';
import {PrivateKey} from '../../../entity/private-key';

@Component({
  selector: 'app-wallet-bch-transaction',
  templateUrl: './wallet-bch-transaction.page.html',
  styleUrls: ['./wallet-bch-transaction.page.scss'],
})
export class WalletBchTransactionPage implements OnInit {

  hash: string;
  transaction: CryptoBchTx;
  options: InAppBrowserOptions;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private inAppBrowser: InAppBrowser,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.transaction = {
      fee: 0,
      blockheight: '', confirmations: '', datetime: '', txid: '', txins: [], txouts: [], value: 0
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
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.http.get(this.constant.baseUrl + '/BCHTEST/txid/' + this.hash).subscribe(res => {
      this.transaction = (res as any).payload;
      let inValue = 0;
      let allInValue = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.transaction.txins.length; j++) {
        if (this.transaction.txins[j].addresses[0] === this.privateKey.bchAddress) {
          inValue = inValue + Number(this.transaction.txins[j].amount);
        }
        allInValue = allInValue + Number(this.transaction.txins[j].amount);
      }
      let outValue = 0;
      let allOutValue = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let k = 0; k < this.transaction.txouts.length; k++) {
        if (this.transaction.txouts[k].addresses[0] === this.privateKey.bchAddress) {
          outValue = outValue + Number(this.transaction.txouts[k].amount);
        }
        allOutValue = allOutValue + Number(this.transaction.txouts[k].amount);
      }
      this.transaction.fee = allInValue - allOutValue;
      this.transaction.value = Math.abs(outValue - inValue) - this.transaction.fee;
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
    url = 'https://blockexplorer.one/bch/testnet/tx/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  openAddress(url: string) {
    url = 'https://blockexplorer.one/bch/testnet/address/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  async copyTxHash() {

    const toast = await this.toastController.create({
      message: 'Hash已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.transaction.txid);
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
