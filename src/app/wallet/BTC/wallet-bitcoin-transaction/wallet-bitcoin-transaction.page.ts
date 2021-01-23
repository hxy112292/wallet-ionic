import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {SochainBtcTransaction} from '../../../entity/sochain-btc-transaction';
import {PrivateKey} from '../../../entity/private-key';
import * as net from 'net';

@Component({
  selector: 'app-wallet-bitcoin-transaction',
  templateUrl: './wallet-bitcoin-transaction.page.html',
  styleUrls: ['./wallet-bitcoin-transaction.page.scss'],
})
export class WalletBitcoinTransactionPage implements OnInit {

  hash: string;
  transaction: SochainBtcTransaction;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.transaction = {
      block_no: 0,
      confirmations: 0,
      fee: '',
      incoming: undefined,
      inputs: [],
      outgoing: undefined,
      outputs: [],
      sent_value: '',
      time: '',
      txid: ''
    };

    this.privateKey = new PrivateKey();
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.hash = this.route.snapshot.paramMap.get('transaction');
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.constant.showLoader();
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BTCTEST';
    } else {
      network = 'BTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/tx/' + this.hash).subscribe(res => {
      this.transaction = (res as any).data;
      this.constant.hideLoader();
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
      url = 'https://www.blockchain.com/btc-testnet/tx/' + url;
    } else {
      url = 'https://www.blockchain.com/btc/tx/' + url;
    }
    this.constant.openBrowser(url);
  }

  openAddress(url: string) {
    if (this.privateKey.network === 'testNet') {
      url = 'https://www.blockchain.com/btc-testnet/address/' + url;
    } else {
      url = 'https://www.blockchain.com/btc/address/' + url;
    }
    this.constant.openBrowser(url);
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
