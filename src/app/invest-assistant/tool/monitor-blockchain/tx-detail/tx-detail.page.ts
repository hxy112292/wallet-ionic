import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {TxHistory} from '../../../../entity/tx-history';
import {SochainBtcTransaction} from '../../../../entity/sochain-btc-transaction';

@Component({
  selector: 'app-tx-detail',
  templateUrl: './tx-detail.page.html',
  styleUrls: ['./tx-detail.page.scss'],
})
export class TxDetailPage implements OnInit {

  hash: string;
  transaction: SochainBtcTransaction;
  txHistory: TxHistory;

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
  }

  ngOnInit() {

    this.txHistory = JSON.parse(this.route.snapshot.paramMap.get('txHistoryInfo'));
    this.hash = this.txHistory.txHash;
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/BTC/tx/' + this.hash).subscribe(res => {
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
    url = 'https://www.blockchain.com/btc/tx/' + url;
    this.constant.openBrowser(url);
  }

  openAddress(url: string) {
    url = 'https://www.blockchain.com/btc/address/' + url;
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
