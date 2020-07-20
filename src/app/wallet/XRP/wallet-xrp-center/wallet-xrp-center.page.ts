import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Storage} from '@ionic/storage';
import {PrivateKey} from '../../../entity/private-key';
import {RippleAPI} from 'ripple-lib';
import {RippleAddress} from '../../../entity/ripple-address';
import {RippleTxAccount} from '../../../entity/ripple-tx-account';

@Component({
  selector: 'app-wallet-xrp-center',
  templateUrl: './wallet-xrp-center.page.html',
  styleUrls: ['./wallet-xrp-center.page.scss'],
})
export class WalletXrpCenterPage implements OnInit {

  privateKey: PrivateKey;
  xrpAddress: RippleAddress;
  xrpTransactionList: RippleTxAccount[];
  price: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private storage: Storage) {

    this.privateKey = {
      erc20TokenList: [],
      xrpKeyPair: '',
      xrpAddress: '', xrpPrivateKey: '',
      bchAddress: '', bchPrivateKey: '',
      ltcAddress: '', ltcPrivateKey: '',
      mnemonic: '',
      btcAddress: '',
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: '',
      password: ''
    };

    this.xrpAddress = {
      ownerCount: '', previousAffectingTransactionID: '', previousAffectingTransactionLedgerVersion: '', sequence: '', xrpBalance: ''
    };

    this.xrpTransactionList = [];

    this.price = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
    this.getPrice();
  }

  getPrice() {
    this.http.get(this.constant.baseUrl + '/monitorPrice/coinPrice', {
      params: {
        symbol: 'xrpusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.constant.showLoader();
    const api = new RippleAPI({
      server: 'wss://s.altnet.rippletest.net:51233'
    });
    api.connect().then(() => {
      /* begin custom code ------------------------------------ */
      const myAddress = this.privateKey.xrpAddress;
      api.getAccountInfo(myAddress).then( res => {
        this.xrpAddress = res as any;
        api.request('account_tx', {
          account: myAddress,
          binary: false,
          forward: false,
          ledger_index_max: -1,
          ledger_index_min: -1,
          limit: 30
        }).then( transactions => {
          this.xrpTransactionList = (transactions as any).transactions;
          api.disconnect();
          this.constant.hideLoader();
        });
      });
    }).catch(console.error);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getAddressInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toWalletXRPTransaction(hash: string) {
    this.router.navigate(['wallet-xrp-transaction', {transaction: hash}]);
  }

  toWalletXRPReceive(privateKey: PrivateKey) {
    this.router.navigate(['wallet-xrp-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletXRPSend(privateKey: PrivateKey) {
    this.router.navigate(['wallet-xrp-send',
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.xrpAddress.xrpBalance}]);
  }

  toCoinDetail() {
    this.router.navigate(['coin-detail', {codeInfo: 'ripple'}]);
  }

}
