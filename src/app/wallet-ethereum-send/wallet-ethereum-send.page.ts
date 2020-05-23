import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import { ethers, utils } from 'ethers';
import {AlertController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {EtherscanTx} from '../entity/etherscan-tx';

@Component({
  selector: 'app-wallet-ethereum-send',
  templateUrl: './wallet-ethereum-send.page.html',
  styleUrls: ['./wallet-ethereum-send.page.scss'],
})
export class WalletEthereumSendPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  balance: number;
  amount: string;
  fee: number;
  gwei: number;
  gas: number;
  note: string;
  tmpHash: EtherscanTx;
  tmpHashList: EtherscanTx[];

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

    this.note = '';
    this.amount = '';
    this.fee = 0;
    this.balance = 0;

    this.tmpHashList = [];
    this.tmpHash = {
      blockNumber: '',
      timeStamp: '',
      hash: '',
      nonce: '',
      blockHash: '',
      transactionIndex: '',
      from: '',
      to: '',
      value: '',
      gas: '',
      gasPrice: '',
      isError: '',
      // tslint:disable-next-line:variable-name
      txreceipt_status: '',
      input: '',
      contractAddress: '',
      cumulativeGasUsed: '',
      gasUsed: '',
      confirmations: ''
    };
  }

  ngOnInit() {
    this.balance = Number(this.route.snapshot.paramMap.get('balance'));
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

    if (this.note == null || this.note === '') {
      this.note = '0x';
    }

    if (this.note.substr(0, 2) !== '0x' ) {
      this.constant.alert('备注的前缀必须是0x');
      return;
    }
    const re = /^[0-9a-fA-FxX]*$/g;
    if (!re.test(this.note)) {
      this.constant.alert('备注必须是十六进制数');
      return;
    }


    // 选择区块链网络
    const provider = new ethers.providers.EtherscanProvider('ropsten');
    // 生成钱包
    const wallet = new ethers.Wallet(this.privateKey.ethPrivateKey, provider);

    const transaction = {
      nonce: provider.getTransactionCount(wallet.getAddress(), 'pending'),
      gasLimit: 100000,
      gasPrice: utils.parseUnits(String(this.gwei), 'gwei').toHexString(),

      to: this.recipientAddr,
      // ... or supports ENS names
      // to: "ricmoo.firefly.eth",

      value: utils.parseEther(this.amount),
      data: this.note,

      // This ensures the transaction cannot be replayed on different networks
      chainId: ethers.utils.getNetwork('ropsten').chainId
    };

    const signPromise = wallet.sign(transaction);

    signPromise.then((signedTransaction) => {

      provider.sendTransaction(signedTransaction).then((tx) => {
        console.log(tx);
        this.tmpHash.hash = (tx as any).hash;
        this.tmpHash.from = this.privateKey.ethAddress;
        this.tmpHash.to = this.recipientAddr;
        this.tmpHash.value = String(Number(this.amount) * 1000000000000000000);
        this.tmpHash.confirmations = '-1';
        this.tmpHash.timeStamp = String(new Date().getTime() / 1000);
        this.saveTmpEthTx();
        this.router.navigate(['tabs/wallet/wallet-ethereum-center', {privateKeyInfo: JSON.stringify(this.privateKey)}]);
      }).catch( error => {
        this.constant.alert('发送失败：' + error.toString());
      });
    }).catch( error => {
      this.constant.alert('发送失败：' + error.toString());
    });
  }

  getRecommendFee() {
    // this.http.get(this.constant.ropstenEtherScanUrl + '/api', {
    //   params: {
    //     module: 'proxy',
    //     action: 'eth_gasPrice',
    //     apikey: this.constant.ropstenEtherScanKey
    //   }
    // }).subscribe( res => {
    //   this.gas = (res as any).result / 100000000000000;
    //   this.gwei = 25;
    //   this.fee = this.gas * this.gwei;
    //   this.fee = Number(this.fee.toFixed(8));
    // });
    this.gas = 0.000021;
    this.gwei = 25;
    this.fee = this.gas * this.gwei;
    this.fee = Number(this.fee.toFixed(8));
  }

  async sendConfirm() {
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

  getFee() {
    this.fee = this.gas * this.gwei;
    this.fee = Number(this.fee.toFixed(8));
  }

  saveTmpEthTx() {
    const res = JSON.parse(localStorage.getItem(this.privateKey.ethAddress));
    console.log(this.tmpHashList);
    if (res != null) {
      this.tmpHashList = (res as any);
      this.tmpHashList[this.tmpHashList.length] = this.tmpHash;
    } else {
      console.log('222');
      console.log(this.tmpHash);
      this.tmpHashList[0] = this.tmpHash;
    }
    localStorage.removeItem(this.privateKey.ethAddress);
    localStorage.setItem(this.privateKey.ethAddress, JSON.stringify(this.tmpHashList));
  }
}
