import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../entity/private-key';
import {BarcodeScannerOptions, BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {AlertController} from '@ionic/angular';
import * as bitcoin from 'bitcoinjs-lib';
import {BlockchairBtcUtxo} from '../entity/blockchair-btc-utxo';

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
  utxoList: BlockchairBtcUtxo[];

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
    this.balance = Number(this.route.snapshot.paramMap.get('balance'));
    this.utxoList = JSON.parse(this.route.snapshot.paramMap.get('utxoList'));
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

  sendByTypical() {
    // 创建钱包
    const alice = bitcoin.ECPair.fromWIF(this.privateKey.btcPrivateKey, bitcoin.networks.testnet);
    // 构建交易 builder
    const txb = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);
    // 此次发送的实际总金额
    let inputValueTotal = 0;
    // 使用的utxo的个数
    let inputCount = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.utxoList.length; i++) {
      inputValueTotal = Number(this.utxoList[i].value) + inputValueTotal;
      inputCount = i + 1;
      txb.addInput(this.utxoList[i].transaction_hash, Number(this.utxoList[i].index));
      if (inputValueTotal > Math.round(this.amount * 100000000 + this.fee * 100000000)) {
        break;
      }
    }
    if (inputValueTotal < this.amount * 100000000 + this.fee * 100000000) {
      this.constant.alert('超出钱包可用余额');
      return;
    }
    // 转给目的地址
    txb.addOutput(this.recipientAddr, Math.round(this.amount * 100000000));
    // 扣掉矿工费后，剩下的转回给自己
    txb.addOutput(this.privateKey.btcAddress, inputValueTotal - Math.round(this.amount * 100000000 + this.fee * 100000000));
    // 打印签名后的交易 hash
    for (let i = 0; i < inputCount; i++) {
      txb.sign(i, alice);
    }
    const rawHex = txb.build().toHex();
    // 向区块链广播此次交易
    this.broadcast(rawHex);
    // 跳转回btc钱包页
    this.router.navigate(['tabs/wallet/wallet-bitcoin-center', {privateKeyInfo : JSON.stringify(this.privateKey)}]);
  }

  broadcast(rawHex) {
    this.http.post(this.constant.blockChairUrl + '/bitcoin/testnet/push/transaction', {
      data: rawHex
    }).subscribe( res => {
    });
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
            this.sendByTypical();
          }
        }
      ]
    });
    await alert.present();
  }

}
