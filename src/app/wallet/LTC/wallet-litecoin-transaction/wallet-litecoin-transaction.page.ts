import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {SochainLtcTransaction} from '../../../entity/sochain-ltc-transaction';

@Component({
  selector: 'app-wallet-litecoin-transaction',
  templateUrl: './wallet-litecoin-transaction.page.html',
  styleUrls: ['./wallet-litecoin-transaction.page.scss'],
})
export class WalletLitecoinTransactionPage implements OnInit {

  hash: string;
  transaction: SochainLtcTransaction;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.transaction = {
      block_no: 0,
      fee: '',
      confirmations: 0, incoming: undefined, inputs: [], outgoing: undefined, outputs: [], sent_value: '', time: '', txid: ''
    };
  }

  ngOnInit() {

    this.hash = this.route.snapshot.paramMap.get('transaction');
    this.getTransactionInfo();
  }

  getTransactionInfo() {
    this.constant.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/LTCTEST/tx/' + this.hash).subscribe(res => {
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
    url = 'https://sochain.com/tx/LTCTEST/' + url;
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
