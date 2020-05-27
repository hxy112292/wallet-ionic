import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../entity/private-key';
import {BlockchairBtcAddress} from '../entity/blockchair-btc-address';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {BlockchairEthAddress} from '../entity/blockchair-eth-address';
import {EtherscanBalance} from '../entity/etherscan-balance';
import {EtherscanTx} from '../entity/etherscan-tx';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-wallet-ethereum-center',
  templateUrl: './wallet-ethereum-center.page.html',
  styleUrls: ['./wallet-ethereum-center.page.scss'],
})
export class WalletEthereumCenterPage implements OnInit {

  privateKey: PrivateKey;
  blockChairAddress: BlockchairEthAddress;
  etherscanBalance: EtherscanBalance;
  tmpHashList: EtherscanTx[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private storage: Storage) {

    this.privateKey = {
      ltcAddress: '', ltcPrivateKey: '',
      mnemonic: '',
      btcAddress: '',
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: '',
      password: ''
    };

    this.blockChairAddress = {
      balance: '',
      balance_usd: '',
      state: '',
      transactions: []
    };

    this.etherscanBalance = {
      status: '',
      message: '',
      result: '',
      txList: []
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
  }

  getAddressInfo() {
    this.http.get(this.constant.ropstenEtherScanUrl + '/api', {
      params: {
        module: 'account',
        action: 'balance',
        address: this.privateKey.ethAddress,
        apiKey: this.constant.ropstenEtherScanKey,
        tag: 'latest'
      }
    }).subscribe(res => {
        this.etherscanBalance = res as any;
        this.http.get(this.constant.ropstenEtherScanUrl + '/api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: this.privateKey.ethAddress,
            apiKey: this.constant.ropstenEtherScanKey,
            sort: 'desc'
          }
        }).subscribe( res2 => {
          this.etherscanBalance.txList = (res2 as any).result;
          this.getTmpHash();
        });
    });
  }

  getTmpHash() {
    this.storage.get(this.privateKey.ethAddress).then( res => {
      if (res != null) {
        this.tmpHashList = res as any;
        for (let i = 0; i < this.tmpHashList.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.etherscanBalance.txList.length; j++) {
            if (this.tmpHashList[i].hash === this.etherscanBalance.txList[j].hash) {
              this.tmpHashList.splice(i, 1);
              if (this.tmpHashList.length === 0 ) {
                break;
              }
            }
          }
        }
        this.storage.remove(this.privateKey.ethAddress);
        if (this.tmpHashList.length !== 0) {
          this.storage.set(this.privateKey.ethAddress, this.tmpHashList);
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

  toWalletEthereumTransaction(transaction: EtherscanTx) {
    this.router.navigate(['tabs/wallet/wallet-ethereum-transaction', {transactionInfo: JSON.stringify(transaction)}]);
  }

  toWalletEthereumReceive(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-ethereum-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletEthereumSend(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-ethereum-send', {privateKeyInfo: JSON.stringify(privateKey),
      balance: this.etherscanBalance.result}]);
  }

  toCoinDetail() {
    this.router.navigate(['tabs/wallet/coin-detail', {codeInfo: 'ethereum'}]);
  }
}
