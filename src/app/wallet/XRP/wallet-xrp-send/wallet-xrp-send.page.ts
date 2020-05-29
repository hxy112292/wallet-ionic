import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ConstantService} from '../../../constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import * as ripple from 'ripple-lib';
import {WalletContactChoosePage} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.page';

@Component({
  selector: 'app-wallet-xrp-send',
  templateUrl: './wallet-xrp-send.page.html',
  styleUrls: ['./wallet-xrp-send.page.scss'],
})
export class WalletXrpSendPage implements OnInit {

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
              private storage: Storage,
              private modalController: ModalController) {

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.recommendFee = 0.0001;
    this.fee = 0.0001;
  }

  ngOnInit() {
    this.balance = Number(this.route.snapshot.paramMap.get('balance'));
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
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
    const RippleAPI = ripple.RippleAPI;
    const api = new RippleAPI({
      server: 'wss://s.altnet.rippletest.net:51233'
    });

    api.connect().then(() => {
      // Connected
      console.log('connected successful');

      api.prepareTransaction({
        TransactionType: 'Payment',
        Account: this.privateKey.xrpAddress,
        Amount: api.xrpToDrops(this.amount), // Same as "Amount": "22000000"
        Destination: this.recipientAddr
      }, {
        // Expire this transaction if it doesn't execute within ~5 minutes:
        maxLedgerVersionOffset: 75,
        fee: String(this.fee)
      }).then( preparedTx => {
        const maxLedgerVersion = preparedTx.instructions.maxLedgerVersion;
        console.log('Prepared transaction instructions:', preparedTx.txJSON);
        console.log('Transaction cost:', preparedTx.instructions.fee, 'XRP');
        console.log('Transaction expires after ledger:', maxLedgerVersion);
        const response = api.sign(preparedTx.txJSON, this.privateKey.xrpKeyPair);
        const txID = response.id;
        console.log('Identifying hash:', txID);
        const txBlob = response.signedTransaction;
        console.log('Signed blob:', txBlob);

        api.getLedgerVersion().then( latestLedgerVersion => {
          api.submit(txBlob).then( result => {
            console.log('Tentative result code:', result.resultCode);
            console.log('Tentative result message:', result.resultMessage);
            const earliestLedgerVersion = latestLedgerVersion + 1;
            api.disconnect();
          });
        });
      });
    }).catch(console.error);
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
          '<strong>发送方：</strong><br><ion-text style="font-size:small">' + this.privateKey.xrpAddress + '</ion-text><br><br>' +
          '<strong>接收方：</strong><br>' + this.recipientAddr + '<br><br>' +
          '<strong>金额：</strong>' + this.amount + ' XRP<br><br>' +
          '<strong>手续费：</strong>' + this.fee + ' XRP<br><br>',
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

  async chooseAddress() {
    const modal = await this.modalController.create({
      component: WalletContactChoosePage,
      componentProps: {
        symbol: 'XRP'
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {
      this.recipientAddr = data;
    }
  }
}
