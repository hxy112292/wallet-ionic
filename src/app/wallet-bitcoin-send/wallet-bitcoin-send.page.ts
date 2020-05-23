import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../entity/private-key';
import {BarcodeScannerOptions, BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-wallet-bitcoin-send',
  templateUrl: './wallet-bitcoin-send.page.html',
  styleUrls: ['./wallet-bitcoin-send.page.scss'],
})
export class WalletBitcoinSendPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  amount: number;
  balance: string;
  recommendFee: number;
  fee: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private barcodeScanner: BarcodeScanner,
              private http: HttpClient,
              private clipboard: Clipboard,
              private constant: ConstantService,
              private alertController: AlertController) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.balance = this.route.snapshot.paramMap.get('balance');
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

  send() {
    const bitcore = require('bitcore-lib');
    const Insight = require('bitcore-insight').Insight;
    const insight = new Insight('testnet');
  }

  getRecommendFee() {
    this.http.get(this.constant.blockChairUrl + '/bitcoin/testnet/stats').subscribe( res => {
      this.recommendFee = (res as any).data.average_transaction_fee_24h / 100000000;
      this.fee = this.recommendFee;
    });
  }

  async sendConfirm() {
    const alert = await this.alertController.create({
      header: '请核对信息',
      message:
          '<strong>发送方：</strong><br><ion-text style="font-size:small">' + this.privateKey.btcAddress + '</ion-text><br><br>' +
          '<strong>接收方：</strong><br>' + this.recipientAddr + '<br><br>' +
          '<strong>金额：</strong>' + this.amount + ' BTC<br><br>' +
          '<strong>手续费：</strong>' + this.fee + ' BTC<br><br>',
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
            this.send();
          }
        }
      ]
    });
    await alert.present();
  }

}
