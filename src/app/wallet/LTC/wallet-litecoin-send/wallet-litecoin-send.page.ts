import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {HttpClient} from '@angular/common/http';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ConstantService} from '../../../service/constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import {StorageService} from '../../../service/storage.service';
import {PrivateKey} from '../../../entity/private-key';
import * as litecore from 'litecore-lib';
import {WalletContactChoosePage} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.page';

@Component({
  selector: 'app-wallet-litecoin-send',
  templateUrl: './wallet-litecoin-send.page.html',
  styleUrls: ['./wallet-litecoin-send.page.scss'],
})
export class WalletLitecoinSendPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  amount: number;
  balance: number;
  recommendFee: number;
  fee: number;
  utxoList: [];

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
  }

  ngOnInit() {

    this.balance = Number(this.route.snapshot.paramMap.get('balance'));
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getUtxoList();
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
      network = 'LTCTEST';
    } else {
      network = 'LTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/tx/fee').subscribe( res => {
      const fee1 = (res as any).payload.average;
      const fee2 = (res as any).payload.recommended;
      this.recommendFee = fee1 > fee2 ? fee1 : fee2;
      this.fee = this.recommendFee;
    });
  }

  sendByTypical() {

    try {
      const transaction = new litecore.Transaction()
          .from(this.utxoList)
          .to(this.recipientAddr, Math.round(this.amount * 100000000))
          .fee(Math.round(this.fee * 100000000))
          .change(this.privateKey.ltcAddress)
          .sign(this.privateKey.ltcPrivateKey);

      this.broadcast(transaction.toString());
      this.router.navigate(['wallet-litecoin-center', {privateKeyInfo: JSON.stringify(this.privateKey)}]);
    } catch (e) {
      this.constant.alert(e.toString());
    }
  }

  getUtxoList() {
    let url;
    if (this.privateKey.network === 'testNet') {
      url = this.constant.litecoreTestnetUrl;
    } else {
      url = this.constant.litecoreUrl;
    }
    this.http.get(url + '/api/addrs/' + this.privateKey.ltcAddress + '/utxo').subscribe( res => {
      this.utxoList = (res as any);
    });
  }

  broadcast(rawHex) {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'LTCTEST';
    } else {
      network = 'LTC';
    }
    this.http.post(this.constant.walletBackendUrl + '/' + network + '/send_tx', {
      tx_hex: rawHex
    }).subscribe( res => {
      if ((res as any).code === 1) {
        this.constant.alert('交易失败：请先等待上一笔交易打包完毕');
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
          '<strong>发送方：</strong><br><ion-text style="font-size:small">' + this.privateKey.ltcAddress + '</ion-text><br><br>' +
          '<strong>接收方：</strong><br>' + this.recipientAddr + '<br><br>' +
          '<strong>金额：</strong>' + this.amount + ' LTC<br><br>' +
          '<strong>手续费：</strong>' + this.fee + ' LTC<br><br>',
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
        symbol: 'LTC'
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {
      this.recipientAddr = data;
    }
  }
}
