import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {HttpClient} from '@angular/common/http';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ConstantService} from '../../../service/constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import {StorageService} from '../../../service/storage.service';
import {PrivateKey} from '../../../entity/private-key';
import * as bitcash from 'bitcore-lib-cash';
import {WalletContactChoosePage} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.page';
import {CryptoBchTx} from '../../../entity/crypto-bch-tx';
import {BitcoreBchUtxo} from '../../../entity/bitcore-bch-utxo';

@Component({
  selector: 'app-wallet-bch-send',
  templateUrl: './wallet-bch-send.page.html',
  styleUrls: ['./wallet-bch-send.page.scss'],
})
export class WalletBchSendPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  txList: CryptoBchTx[];
  amount: number;
  balance: number;
  recommendFee: number;
  fee: number;
  utxoList: BitcoreBchUtxo[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private barcodeScanner: BarcodeScanner,
              private http: HttpClient,
              private clipboard: Clipboard,
              private constant: ConstantService,
              private alertController: AlertController,
              private storage: StorageService,
              private modalController: ModalController) {

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.utxoList = [];
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.balance = Number(this.route.snapshot.paramMap.get('balance'));
    this.txList = JSON.parse(this.route.snapshot.paramMap.get('txList'));
    this.getRecommendFee();
  }

  qrScan() {
    this.barcodeScanner
        .scan()
        .then(barcodeData => {
          this.recipientAddr = barcodeData.text;
        })
        .catch(err => {
          console.log('Error', err);
        });
  }

  paste() {
    this.clipboard.paste().then((resolve: string) => {
      this.recipientAddr = resolve;
    });
  }

  getRecommendFee() {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BCHTEST';
    } else {
      network = 'BCH';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/tx/fee').subscribe( res => {
      const fee1 = (res as any).payload.average;
      const fee2 = (res as any).payload.recommended;
      this.recommendFee = fee1 > fee2 ? fee1 : fee2;
      this.fee = this.recommendFee;
    });
  }

  sendByTypical() {

    this.getUtxoList();

    const transaction = new bitcash.Transaction()
        .from(this.utxoList)
        .to(this.recipientAddr, Math.round(this.amount * 100000000))
        .fee(Math.round(this.fee * 100000000))
        .change(this.privateKey.bchAddress)
        .sign(this.privateKey.bchPrivateKey);

    const rawHex = transaction.toString();

    this.broadcast(rawHex);
    this.router.navigate(['wallet-bch-center', {privateKeyInfo: JSON.stringify(this.privateKey)}]);
  }

  getUtxoList() {
    let k = 0;
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < this.txList.length; i++) {
      const utxo = new BitcoreBchUtxo();
      // tslint:disable-next-line:prefer-for-of
      for ( let j = 0; j < this.txList[i].txouts.length; j++) {
        if (this.txList[i].txouts[j].addresses[0] === this.privateKey.bchAddress && this.txList[i].txouts[j].spent === false) {
          utxo.address = this.privateKey.bchAddress;
          utxo.txid = this.txList[i].txid;
          utxo.vout = j;
          utxo.scriptPubKey = this.txList[i].txouts[j].script.hex;
          utxo.satoshis = Math.round(Number(this.txList[i].txouts[j].amount) * 100000000);
          this.utxoList[k++] = utxo;
        }
      }
    }
  }

  broadcast(rawHex) {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BCHTEST';
    } else {
      network = 'BCH';
    }
    this.http.post(this.constant.walletBackendUrl + '/' + network + '/send_tx', {
      hex: rawHex
    }).subscribe( res => {
      if ((res as any).code === 1) {
        console.log(res);
        this.constant.alert('交易失败：' + (res as any).message);
      }
    });
  }

  async sendConfirm() {

    if (this.recipientAddr == null || this.recipientAddr === '') {
      this.constant.alert('接收方地址不能为空');
      return;
    }
    if (this.amount == null) {
      this.constant.alert('金额不能为空');
      return;
    }

    if (this.fee == null) {
      this.constant.alert('手续费不能为空');
      return;
    }

    const alert = await this.alertController.create({
      header: '请核对信息',
      message:
          '<strong>发送方：</strong><br><ion-text style="font-size:small">' + this.privateKey.bchAddress + '</ion-text><br><br>' +
          '<strong>接收方：</strong><br>' + this.recipientAddr + '<br><br>' +
          '<strong>金额：</strong>' + this.amount + ' BCH<br><br>' +
          '<strong>手续费：</strong>' + this.fee + ' BCH<br><br>',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: () => {
            this.matchPassword();
          }
        }
      ]
    });
    await alert.present();
  }

  async matchPassword() {
    const alert = await this.alertController.create({
      header: '输入钱包密码',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: '请输入密码'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: (alertData) => {
            if (alertData.password !== this.privateKey.password) {
              this.constant.alert('密码错误！');
            } else {
              this.sendByTypical();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async chooseAddress() {
    const modal = await this.modalController.create({
      component: WalletContactChoosePage,
      componentProps: {
        symbol: 'BCH'
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {
      this.recipientAddr = data;
    }
  }
}
