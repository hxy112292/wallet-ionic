import { Component, OnInit } from '@angular/core';
import {EtherscanTx} from '../../../entity/etherscan-tx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {Erc20Token} from '../../../entity/erc20-token';
import {PrivateKey} from '../../../entity/private-key';
import {BrowserService} from '../../../service/browser.service';

@Component({
  selector: 'app-wallet-erc20-transaction',
  templateUrl: './wallet-erc20-transaction.page.html',
  styleUrls: ['./wallet-erc20-transaction.page.scss'],
})
export class WalletErc20TransactionPage implements OnInit {

  hash: string;
  transaction: EtherscanTx;
  erc20Token: Erc20Token;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private browserService: BrowserService,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.transaction = {
      blockNumber: '',
      timeStamp: '',
      hash: '',
      nonce: '',
      blockHash: '',
      transactionIndex: '',
      from: '',
      to: '',
      value: '',
      gas: '',
      gasPrice: '',
      isError: '',
      txreceipt_status: '',
      input: '',
      contractAddress: '',
      cumulativeGasUsed: '',
      gasUsed: '',
      confirmations: ''
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.transaction = JSON.parse(this.route.snapshot.paramMap.get('transactionInfo'));
    this.erc20Token = JSON.parse(this.route.snapshot.paramMap.get('erc20TokenInfo'));
  }

  doRefresh(event) {
    console.log('Begin async operation');
    // this.getTransactionInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openHash(url: string) {
    if (this.privateKey.network === 'testNet') {
      url = 'https://ropsten.etherscan.io/tx/' + url;
    } else {
      url = 'https://etherscan.io/tx/' + url;
    }
    this.browserService.openBrowser(url);
  }

  openAddress(url: string) {
    if (this.privateKey.network === 'testNet') {
      url = 'https://ropsten.etherscan.io/address/' + url;
    } else {
      url = 'https://etherscan.io/address/' + url;
    }
    this.browserService.openBrowser(url);
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
