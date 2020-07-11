import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {PrivateKey} from '../../../entity/private-key';
import {Storage} from '@ionic/storage';
import {SochainBtcAddress} from '../../../entity/sochain-btc-address';
import {SochainBtcTransaction} from '../../../entity/sochain-btc-transaction';

@Component({
  selector: 'app-wallet-bitcoin-center',
  templateUrl: './wallet-bitcoin-center.page.html',
  styleUrls: ['./wallet-bitcoin-center.page.scss'],
})
export class WalletBitcoinCenterPage implements OnInit {

  privateKey: PrivateKey;
  sochainBtcAddress: SochainBtcAddress;
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
      btcAddress: this.constant.testBTCAddress,
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: '',
      password: ''
    };

    this.sochainBtcAddress = {
      address: '', balance: '', txs: [], value_usd: 0
    };

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
        symbol: 'btcusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.http.get(this.constant.baseUrl + '/BTCTEST/address/' + this.privateKey.btcAddress).subscribe(res => {
      this.sochainBtcAddress = (res as any).data;
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
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.sochainBtcAddress.balance}]);
  }

  toCoinDetail() {
    this.router.navigate(['tabs/wallet/coin-detail', {codeInfo: 'bitcoin'}]);
  }
}
