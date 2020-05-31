import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ConstantService} from '../../../constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Contract, ethers, utils} from 'ethers';
import {WalletContactChoosePage} from '../../wallet-contact/wallet-contact-choose/wallet-contact-choose.page';
import {Erc20Token} from '../../../entity/erc20-token';

@Component({
  selector: 'app-wallet-erc20-send',
  templateUrl: './wallet-erc20-send.page.html',
  styleUrls: ['./wallet-erc20-send.page.scss'],
})
export class WalletErc20SendPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  erc20Balance: number;
  ethBalance: number;
  amount: string;
  fee: number;
  gwei: number;
  gas: number;
  erc20Token: Erc20Token;

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
    this.amount = '';
    this.fee = 0;
    this.erc20Balance = 0;
  }

  ngOnInit() {
    this.erc20Balance = Number(this.route.snapshot.paramMap.get('erc20Balance'));
    this.ethBalance = Number(this.route.snapshot.paramMap.get('ethBalance'));
    this.erc20Token = JSON.parse(this.route.snapshot.paramMap.get('erc20TokenInfo'));
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
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
    const contractAbiFragment = [
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: '_to',
            type: 'address'
          },
          {
            name: '_value',
            type: 'uint256'
          }
        ],
        outputs: [
          {
            name: 'success',
            type: 'bool',
          },
        ],
        constant: false,
        payable: false,
      }
    ];

    const numberOfTokens = utils.parseUnits(this.amount, 18);

    // 选择区块链网络
    const provider = new ethers.providers.EtherscanProvider('ropsten');
    // 生成钱包
    const wallet = new ethers.Wallet(this.privateKey.ethPrivateKey, provider);

    const contract = new Contract(this.erc20Token.address, contractAbiFragment, wallet);
    contract.transfer(this.recipientAddr, numberOfTokens).then( res => {
      if ((res as any) === 'false') {
        this.constant.alert('发送失败');
        return;
      } else {
        this.router.navigate(['tabs/wallet/wallet-erc20-center', {privateKeyInfo : JSON.stringify(this.privateKey)
          , erc20TokenInfo: JSON.stringify(this.erc20Token)}]);
      }
    }).catch( error => {
      this.constant.alert('发送失败：' + error);
      return;
    });
  }

  getRecommendFee() {
    this.gas = 0.000021;
    this.gwei = 25;
    this.fee = this.gas * this.gwei;
    this.fee = Number(this.fee.toFixed(8));
  }

  async sendConfirm() {

    if (this.recipientAddr == null || this.recipientAddr === '') {
      this.constant.alert('接收方地址不能为空');
      return;
    }
    if (this.amount == null || this.amount === '') {
      this.constant.alert('金额不能为空');
      return;
    }

    if (this.fee > this.ethBalance) {
      this.constant.alert('ETH余额不足，无法支付矿工费');
      return;
    }

    if (Number(this.amount) > this.erc20Balance) {
      this.constant.alert('大于可用余额');
      return;
    }

    const alert = await this.alertController.create({
      header: '请核对信息',
      message:
          '<strong>发送方：</strong><br><ion-text style="font-size:small">' + this.privateKey.ethAddress + '</ion-text><br><br>' +
          '<strong>接收方：</strong><br>' + this.recipientAddr + '<br><br>' +
          '<strong>金额：</strong>' + this.amount + ' ETH<br><br>' +
          '<strong>手续费：</strong>' + this.fee + ' ETH<br><br>',
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
        symbol: 'ETH'
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {
      this.recipientAddr = data;
    }
  }

}
