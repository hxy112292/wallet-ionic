import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../../../entity/private-key';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import * as bitcoin from 'bitcoinjs-lib';
import * as bitcore from 'bitcore-lib';
import {WalletContactChoosePage} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.page';
import {StorageService} from '../../../service/storage.service';
import {SochainBtcUtxo} from '../../../entity/sochain-btc-utxo';
import {AlertService} from '../../../service/alert.service';
import {LitecoreUtxo} from '../../../entity/litecore-utxo';
import {MathService} from '../../../service/math.service';
import {BitcoreUtxo} from '../../../entity/bitcore-utxo';

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
  balance: number;
  recommendFee: number;
  fee: number;
  sochainUtxoList: SochainBtcUtxo[];
  utxoList: BitcoreUtxo[];

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
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.utxoList = [];
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.balance = Number(this.route.snapshot.paramMap.get('balance'));
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

  // sendByTypical() {
  //   let network;
  //   if (this.privateKey.network === 'testNet') {
  //     network = 'BTCTEST';
  //   } else {
  //     network = 'BTC';
  //   }
  //   this.http.get(this.constant.walletBackendUrl + '/' + network + '/unspent/' + this.privateKey.btcAddress).subscribe( res => {
  //     this.utxoList = (res as any).data.txs;
  //     try {
  //       // 创建钱包
  //       // const alice = bitcoin.ECPair.fromWIF(this.privateKey.btcPrivateKey, bitcoin.networks.testnet);
  //       const alice = bitcoin.ECPair.fromPrivateKey(Buffer.from(this.privateKey.btcPrivateKey, 'hex'), {network: bitcoin.networks.testnet});
  //       // 构建交易 builder
  //       const txb = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);
  //       // 此次发送的实际总金额
  //       let inputValueTotal = 0;
  //       // 将数据转为Satoshi
  //       const amount = Math.round(this.amount * 100000000);
  //       const fee = Math.round(this.fee * 100000000);
  //       // 使用的utxo的个数
  //       let inputCount = 0;
  //       // tslint:disable-next-line:prefer-for-of
  //       for (let i = 0; i < this.utxoList.length; i++) {
  //         inputValueTotal = Math.round(Number(this.utxoList[i].value) * 100000000) + inputValueTotal;
  //         inputCount = i + 1;
  //         txb.addInput(this.utxoList[i].txid, Number(this.utxoList[i].output_no));
  //         if (inputValueTotal >= amount + fee) {
  //           break;
  //         }
  //       }
  //       if (inputValueTotal < amount + fee ) {
  //         this.alertService.alert('超出钱包可用余额');
  //         return;
  //       }
  //       // 转给目的地址
  //       txb.addOutput(this.recipientAddr, amount);
  //       // 扣掉矿工费后，剩下的转回给自己
  //       txb.addOutput(this.privateKey.btcAddress, inputValueTotal - amount - fee);
  //       // 打印签名后的交易 hash，签名用的是私钥
  //       for (let i = 0; i < inputCount; i++) {
  //         txb.sign(i, alice);
  //       }
  //       const rawHex = txb.build().toHex();
  //       // 向区块链广播此次交易
  //       this.broadcast(rawHex);
  //     } catch (e) {
  //       this.alertService.alert(e.toString());
  //     }
  //   });
  // }

  sendByTypical() {
    try {
      const transaction = new bitcore.Transaction()
          .from(this.utxoList)
          .to(this.recipientAddr, Math.round(this.amount * 100000000))
          .fee(Math.round(this.fee * 100000000))
          .change(this.privateKey.btcAddress)
          .sign(this.privateKey.btcPrivateKey);
      this.broadcast(transaction.toString());
      this.router.navigate(['wallet-bitcoin-center', {privateKeyInfo: JSON.stringify(this.privateKey)}]);
    } catch (e) {
      console.error(e);
      this.alertService.alert(e.toString());
    }
  }

  getUtxoList() {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BTCTEST';
    } else {
      network = 'BTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/unspent/' + this.privateKey.btcAddress).subscribe( res => {
      this.sochainUtxoList = (res as any).data.txs;
      for (const sochainUtxo of this.sochainUtxoList) {
        const bitcoreUtxo = new BitcoreUtxo();
        bitcoreUtxo.address = this.privateKey.btcAddress;
        bitcoreUtxo.satoshis = this.mathService.accMul(sochainUtxo.value, 100000000);
        bitcoreUtxo.scriptPubKey = sochainUtxo.script_hex;
        bitcoreUtxo.txid = sochainUtxo.txid;
        bitcoreUtxo.vout = sochainUtxo.output_no;
        this.utxoList.push(bitcoreUtxo);
      }
    });
  }

  broadcast(rawHex) {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BTCTEST';
    } else {
      network = 'BTC';
    }
    this.http.post(this.constant.walletBackendUrl + '/' + network + '/send_tx', {
      tx_hex: rawHex
    }).subscribe( res => {
      if ((res as any).code === 1) {
        console.log(res);
        this.alertService.alert('交易失败：' + (res as any).message);
      }
    });
  }

  getRecommendFee() {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BTCTEST';
    } else {
      network = 'BTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/tx/fee').subscribe( res => {
      const fee1 = (res as any).payload.average;
      const fee2 = (res as any).payload.recommended;
      this.recommendFee = fee1 > fee2 ? fee1 : fee2;
      this.fee = this.recommendFee;
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
        symbol: 'BTC'
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {
      this.recipientAddr = data;
    }
  }
}
