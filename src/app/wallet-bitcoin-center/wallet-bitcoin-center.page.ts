import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {PrivateKey} from '../entity/private-key';
import {BlockchairBtcAddress} from '../entity/blockchair-btc-address';
import {Storage} from '@ionic/storage';
import {BlockchairBtcAddressTransaction} from '../entity/blockchair-btc-address-transaction';

@Component({
  selector: 'app-wallet-bitcoin-center',
  templateUrl: './wallet-bitcoin-center.page.html',
  styleUrls: ['./wallet-bitcoin-center.page.scss'],
})
export class WalletBitcoinCenterPage implements OnInit {

  privateKey: PrivateKey;
  blockChairAddress: BlockchairBtcAddress;
  tmpHashList: BlockchairBtcAddressTransaction[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private storage: Storage) {

    this.privateKey = {
      ltcAddress: '', ltcPrivateKey: '',
      mnemonic: '',
      btcAddress: this.constant.testBTCAddress,
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: '',
      password: ''
    };

    this.blockChairAddress = {
      balance: '',
      balance_usd: '',
      state: '',
      transactions: [],
      utxoList: []
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
  }

  getAddressInfo() {
    this.http.get(this.constant.blockChairUrl + '/bitcoin/testnet/dashboards/address/' + this.privateKey.btcAddress, {
      params: {
        transaction_details: 'true',
        limit: '30,30'
      }
    }).subscribe(res => {
      const data = (res as any).data;
      // tslint:disable-next-line:forin
      for (const key in data) {
        const value = data[key];
        this.blockChairAddress = (value as any).address;
        this.blockChairAddress.transactions = (value as any).transactions;
        this.blockChairAddress.utxoList = (value as any).utxo;
        break;
      }
      this.blockChairAddress.state = (res as any).context.state;
      this.getTmpHash();
    });
  }

  getTmpHash() {
    this.storage.get(this.privateKey.btcAddress).then( res => {
      if (res != null) {
        this.tmpHashList = res as any;
        for (let i = 0; i < this.tmpHashList.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.blockChairAddress.transactions.length; j++) {
            if (this.tmpHashList[i].hash === this.blockChairAddress.transactions[j].hash) {
              this.tmpHashList.splice(i, 1);
              if (this.tmpHashList.length === 0 ) {
                break;
              }
            }
          }
        }
        this.storage.remove(this.privateKey.btcAddress);
        if (this.tmpHashList.length !== 0) {
          this.storage.set(this.privateKey.btcAddress, this.tmpHashList);
        }
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getAddressInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toWalletBitcoinTransaction(hash: string) {
    this.router.navigate(['tabs/wallet/wallet-bitcoin-transaction', {transaction: hash}]);
  }

  toWalletBitcoinReceive(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-bitcoin-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletBitcoinSend(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-bitcoin-send',
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.blockChairAddress.balance,
        utxoList: JSON.stringify(this.blockChairAddress.utxoList)}]);
  }

  toCoinDetail() {
    this.router.navigate(['tabs/wallet/coin-detail', {codeInfo: 'bitcoin'}]);
  }
}
