import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {Order} from '../../../entity/order';
import {EtherscanTx} from '../../../entity/etherscan-tx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import {AlertService} from '../../../service/alert.service';
import {PrivateKeyService} from '../../../service/private-key.service';
import {LoaderService} from '../../../service/loader.service';
import {StorageService} from '../../../service/storage.service';
import {ethers, utils} from 'ethers';
import {ExchangeDescPage} from '../../../invest-assistant/listing/exchange/exchange-detail/exchange-desc/exchange-desc.page';
import {WalletPayChoosePage} from '../wallet-pay-choose/wallet-pay-choose.page';

@Component({
  selector: 'app-wallet-eth-pay',
  templateUrl: './wallet-eth-pay.page.html',
  styleUrls: ['./wallet-eth-pay.page.scss'],
})
export class WalletEthPayPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  balance: number;
  amount: string;
  order: Order;
  fee: number;
  gwei: number;
  gas: number;
  note: string;
  tmpHash: EtherscanTx;
  tmpHashList: EtherscanTx[];
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private alertController: AlertController,
              private modalController: ModalController,
              private alertService: AlertService,
              private privateKeyService: PrivateKeyService,
              private loaderService: LoaderService,
              private storage: StorageService) {
    this.order = new Order();
    this.privateKey = new PrivateKey();
    this.note = '';
    this.index = 0;
    this.fee = 0;
    this.balance = 0;
    this.tmpHashList = [];
    this.recipientAddr = '';
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
    this.order = JSON.parse(this.route.snapshot.paramMap.get('order'));
    this.amount = this.order.totalFee + '';
    this.getRecommendFee();
    this.getReceiverAddr();
  }

  async choosePrivateKey() {
    const modal = await this.modalController.create({
      component: WalletPayChoosePage,
      componentProps: {
        symbol: 'ETH'
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {
      this.privateKey = data.privateKey;
      this.balance = data.balance;
    }
  }

  sendByTypical() {

    try {
      // 选择区块链网络
      let provider;
      if (this.privateKey.network === 'testNet') {
        provider = new ethers.providers.EtherscanProvider('ropsten');
      } else {
        provider = new ethers.providers.EtherscanProvider();
      }
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
          this.tmpHash.hash = (tx as any).hash;
          this.tmpHash.from = this.privateKey.ethAddress;
          this.tmpHash.to = this.recipientAddr;
          this.tmpHash.value = String(Number(this.amount) * 1000000000000000000);
          this.tmpHash.confirmations = '-1';
          this.tmpHash.timeStamp = String(new Date().getTime() / 1000);
          this.saveTmpEthTx();
          this.order.fromAddr = this.privateKey.ethAddress;
          this.order.toAddr = this.recipientAddr;
          this.order.payNo = (tx as any).hash;
          this.http.post(this.constant.walletToolBackendUrl + '/order/pay', this.order).subscribe( res => {
            this.router.navigate(['/tabs/me']);
          });
        }).catch( e => {
          this.alertService.alert(e.toString());
        });
      }).catch( e => {
        this.alertService.alert(e.toString());
      });
    } catch (e) {
      this.alertService.alert(e.toString());
    }
  }

  getRecommendFee() {
    this.gas = 0.000021;
    this.gwei = 25;
    this.fee = this.gas * this.gwei;
    this.fee = Number(this.fee.toFixed(8));
  }

  async sendConfirm() {

    if (this.privateKey == null || this.privateKey.ethAddress == null || this.privateKey.ethAddress === '') {
      this.alertService.alert('发送方地址不能为空');
      return;
    }

    if (this.recipientAddr == null || this.recipientAddr === '') {
      this.alertService.alert('接收方地址不能为空');
      return;
    }
    if (this.amount == null || this.amount === '' || !this.amount.match(/^[0-9][0-9]*[.]?[0-9]*/)) {
      this.alertService.alert('金额非法');
      return;
    }
    if (Number(this.amount) > this.balance / 1000000000000000000 + this.fee) {
      this.alertService.alert('金额大过余额');
      return;
    }
    if (this.note == null || this.note === '') {
      this.note = '0x';
    }

    if (this.note.substr(0, 2) !== '0x' ) {
      this.alertService.alert('备注的前缀必须是0x');
      return;
    }
    const re = /^[0-9a-fA-FxX]*$/g;
    if (!re.test(this.note)) {
      this.alertService.alert('备注必须是十六进制数');
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

  getFee() {
    this.fee = this.gas * this.gwei;
    this.fee = Number(this.fee.toFixed(8));
  }

  saveTmpEthTx() {
    this.storage.get(this.privateKey.ethAddress).then(res => {
      if (res != null) {
        this.tmpHashList = (res as any);
        this.tmpHashList[this.tmpHashList.length] = this.tmpHash;
      } else {
        this.tmpHashList[0] = this.tmpHash;
      }
      this.storage.set(this.privateKey.ethAddress, this.tmpHashList);
    });
  }

  getReceiverAddr() {
    this.http.get(this.constant.walletToolBackendUrl + '/order/receiverAddr').subscribe( res => {
      this.recipientAddr = (res as any).result.receiveAddr;
    });
  }

}
