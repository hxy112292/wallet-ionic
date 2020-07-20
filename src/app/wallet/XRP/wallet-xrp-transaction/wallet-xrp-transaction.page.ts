import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {RippleTransaction} from '../../../entity/ripple-transaction';
import {RippleAPI} from 'ripple-lib';

@Component({
  selector: 'app-wallet-xrp-transaction',
  templateUrl: './wallet-xrp-transaction.page.html',
  styleUrls: ['./wallet-xrp-transaction.page.scss'],
})
export class WalletXrpTransactionPage implements OnInit {

  hash: string;
  transaction: RippleTransaction;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.transaction = {
      id: '',
      outcome: {
        fee: '',
        result: '',
        timestamp: '',
        deliveredAmount: {value: ''}
      },
      specification: {
        destination: {address: ''},
        source: {address: ''}
      }
    };
  }

  ngOnInit() {

    this.hash = this.route.snapshot.paramMap.get('transaction');
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.constant.showLoader();
    const api = new RippleAPI({
      server: 'wss://s.altnet.rippletest.net:51233'
    });
    api.connect().then(() => {
      api.getTransaction(this.hash).then( transaction => {
        this.transaction = transaction as any;
        console.log(this.transaction);
        api.disconnect();
        this.constant.hideLoader();
      });
    }).catch(console.error);
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
    url = 'https://test.bithomp.com/explorer/' + url;
    this.constant.openBrowser(url);
  }

  openAddress(url: string) {
    url = 'https://sochain.com/address/LTCTEST/' + url;
    this.constant.openBrowser(url);
  }

  async copyTxHash() {

    const toast = await this.toastController.create({
      message: 'Hash已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.transaction.id);
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
