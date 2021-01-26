import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {SochainLtcTransaction} from '../../../entity/sochain-ltc-transaction';
import {PrivateKey} from '../../../entity/private-key';
import {BrowserService} from '../../../service/browser.service';
import {LoaderService} from '../../../service/loader.service';

@Component({
  selector: 'app-wallet-litecoin-transaction',
  templateUrl: './wallet-litecoin-transaction.page.html',
  styleUrls: ['./wallet-litecoin-transaction.page.scss'],
})
export class WalletLitecoinTransactionPage implements OnInit {

  hash: string;
  transaction: SochainLtcTransaction;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private browserService: BrowserService,
              private loaderService: LoaderService,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.transaction = {
      block_no: 0,
      fee: '',
      confirmations: 0, incoming: undefined, inputs: [], outgoing: undefined, outputs: [], sent_value: '', time: '', txid: ''
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.hash = this.route.snapshot.paramMap.get('transaction');
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.loaderService.showLoader();
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'LTCTEST';
    } else {
      network = 'LTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/tx/' + this.hash).subscribe(res => {
      this.transaction = (res as any).data;
      this.loaderService.hideLoader();
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
    if (this.privateKey.network === 'testNet') {
      url = 'https://sochain.com/tx/LTCTEST/' + url;
    } else {
      url = 'https://sochain.com/tx/LTC/' + url;
    }
    this.browserService.openBrowser(url);
  }

  openAddress(url: string) {
    if (this.privateKey.network === 'testNet') {
      url = 'https://sochain.com/address/LTCTEST/' + url;
    } else {
      url = 'https://sochain.com/address/LTC/' + url;
    }
    this.browserService.openBrowser(url);
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
