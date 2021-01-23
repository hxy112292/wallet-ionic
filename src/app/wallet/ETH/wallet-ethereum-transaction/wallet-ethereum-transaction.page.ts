import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {EtherscanTx} from '../../../entity/etherscan-tx';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {PrivateKey} from '../../../entity/private-key';

@Component({
  selector: 'app-wallet-ethereum-transaction',
  templateUrl: './wallet-ethereum-transaction.page.html',
  styleUrls: ['./wallet-ethereum-transaction.page.scss'],
})
export class WalletEthereumTransactionPage implements OnInit {

  hash: string;
  transaction: EtherscanTx;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
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
    this.privateKey = new PrivateKey();
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.transaction = JSON.parse(this.route.snapshot.paramMap.get('transactionInfo'));
    // this.hash = this.route.snapshot.paramMap.get('transaction');
    // this.getTransactionInfo();
  }

  // getTransactionInfo() {
  //   this.http.get(this.constant.blockChairUrl + '/ethereum/dashboards/transaction/' + this.hash).subscribe(res => {
  //     const data = (res as any).data;
  //     // tslint:disable-next-line:forin
  //     for (const key in data) {
  //       const value = data[key];
  //       this.transaction = (value as any).transaction;
  //       break;
  //     }
  //     this.transaction.state = (res as any).context.state;
  //   });
  // }

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
    this.constant.openBrowser(url);
  }

  openAddress(url: string) {
    if (this.privateKey.network === 'testNet') {
      url = 'https://ropsten.etherscan.io/address/' + url;
    } else {
      url = 'https://etherscan.io/address/' + url;
    }
    this.constant.openBrowser(url);
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
