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
import {AlertService} from '../../../service/alert.service';
import {LitecoreUtxo} from '../../../entity/litecore-utxo';
import {SochainLtcUtxo} from '../../../entity/sochain-ltc-utxo';
import {MathService} from '../../../service/math.service';

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
  sochainUtxoList: SochainLtcUtxo[];
  utxoList: LitecoreUtxo[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private barcodeScanner: BarcodeScanner,
              private http: HttpClient,
              private clipboard: Clipboard,
              private constant: ConstantService,
              private alertController: AlertController,
              private alertService: AlertService,
              private mathService: MathService,
              private storage: StorageService,
              private modalController: ModalController) {

    this.sochainUtxoList = [];
    this.utxoList = [];

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
      this.alertService.alert(e.toString());
    }
  }

  getUtxoList() {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'LTCTEST';
    } else {
      network = 'LTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/unspent/' + this.privateKey.ltcAddress).subscribe( res => {
      this.sochainUtxoList = (res as any).data.txs;
      for (const sochainUtxo of this.sochainUtxoList) {
        const litecoreUtxo = new LitecoreUtxo();
        litecoreUtxo.address = this.privateKey.ltcAddress;
        litecoreUtxo.satoshis = this.mathService.accMul(sochainUtxo.value, 100000000);
        litecoreUtxo.scriptPubKey = sochainUtxo.script_hex;
        litecoreUtxo.txid = sochainUtxo.txid;
        litecoreUtxo.vout = sochainUtxo.output_no;
        this.utxoList.push(litecoreUtxo);
      }
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
        this.alertService.alert('交易失败：请先等待上一笔交易打包完毕');
      }
    });
  }

  async sendConfirm() {

    if (this.recipientAddr == null || this.recipientAddr === '') {
      this.alertService.alert('接收方地址不能为空');
      return;
    }

    if (this.amount == null || !this.amount.toString().match(/^[0-9][0-9]*[.]?[0-9]*/)) {
      this.alertService.alert('金额非法');
      return;
    }

    if (this.fee == null || !this.fee.toString().match(/^[0-9][0-9]*[.]?[0-9]*/)) {
      this.alertService.alert('手续费非法');
      return;
    }

    if (this.amount * 100000000 + this.fee * 100000000 > this.balance * 100000000) {
      this.alertService.alert('金额大过余额');
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
              this.alertService.alert('密码错误！');
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
